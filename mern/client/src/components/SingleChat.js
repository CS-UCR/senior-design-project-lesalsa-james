import { Box, FormControl, Spinner, Text, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { getSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';
import ScrollableChat from './ScrollableChat';
import UpdatedGroupChatPopup from './miscellaneous/UpdatedGroupChatPopup';
import io from 'socket.io-client'
import Lottie, {} from 'react-lottie'
import animationData from "../animations/typing.json"

const ENDPOINT = "https://legamersonly.herokuapp.com/";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(false);
 const [newMessage, setNewMessage] = useState();
 const{ user, selectedChat, setSelectedChat, notification, setNotification } = ChatState();
 const [socketConnected, setSocketConnected] = useState(false);

 const [isTyping, setIsTyping] = useState(false);
 const [typing, setTyping] = useState(false);

 const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: animationData,
   rendererSettings: {
      preserveAspectRation: "xMidYMid slice"
   },
 };

 const toast = useToast();
 
 const fetchMessages = async () => {

  if (!selectedChat) return;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    setLoading(true);

    const { data } = await axios.get(
      `/api/message/${selectedChat._id}`,
      config
    );

    console.log(messages);
    setMessages(data);
    setLoading(false);

    socket.emit('join chat', selectedChat._id);

   } catch(error) {
    toast({
      title: "Error Occurred",
      description: "Failed when loading messages",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
   }
 };


 useEffect(() => {
  socket = io(ENDPOINT);
  socket.emit("setup", user);
  
  socket.on('connected', () => setSocketConnected(true));
  socket.on('typing',() =>setIsTyping(true));
  socket.on('stop typing',() =>setIsTyping(false));
}, []);


 useEffect(() => {
  fetchMessages();

  selectedChatCompare = selectedChat;
}, [selectedChat]);

// console.log(notification, "hellooooooooo");

useEffect(() => {
  socket.on("message received", (newMessageReceived) => {
    if(!selectedChatCompare || selectedChatCompare._id  !== newMessageReceived.chat._id) {
      //give noti
      if(!notification.includes(newMessageReceived)) {
        setNotification([newMessageReceived, ...notification]);
        //fetch all chats again
        setFetchAgain(!fetchAgain);
      }

    } else {
      setMessages([...messages, newMessageReceived]);
    }
  })
}, );
 
 const sendMessage = async (event) => {
   if (event.key === "Enter" && newMessage) {
     socket.emit('stop typing', selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-Type":"application/json",
            Authorization:`Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const {data} = await axios.post('/api/message', {
          content: newMessage,
          chatId:selectedChat._id,
        },
        config
        );

        console.log(data);
        socket.emit('new message', data);
        setMessages([...messages, data]);

      } catch(error) {
        toast({
          title: "Error Occurred when Sending Message",
          description: "Failed to send Message",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      }
   }
 };

 const typingHandler = (e) => {
   setNewMessage(e.target.value);
   //Typing Logic
   if (!socketConnected) return;

   if(!typing) {
     setTyping(true);
     socket.emit("typing", selectedChat._id);
   }

   let lastTypingTime = new Date().getTime();
   var timerLength = 3000;

   setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDifference = timeNow = lastTypingTime;

      if (timeDifference >= timerLength && typing) {
        socket.emit('stop typing', selectedChat._id);
        setTyping(false);
      }
   }, timerLength);
 };


  return <>
      {selectedChat ? (
          <>
          <Text fontSize = {{ base:"28px"}} pb= {3} px = {2} w="100%" d="flex" justifyContent={{base: "space-between"}} alignItems="center">

            {!selectedChat.isGroupChat ? (
                <>
                {getSender(user, selectedChat.users)} 
                
                </>
            ): (
                <> {selectedChat.chatName.toUpperCase()}
                <UpdatedGroupChatPopup fetchAgain = {fetchAgain} setFetchAgain = {setFetchAgain} fetchMessages = {fetchMessages}/>
                </>
            )}

          </Text>
          <Box d="flex" flexDir="column" justifyContent="flex-end" p={3} bg="#E8E8E8" h= "100%" w="100%" borderRadius = "lg" overflowY= "hidden">
          {loading ? (
                  <Spinner w={20} h={20} alignSelf="center" margin= "auto"/> 
                  ) : (
                  <div style={{ display: "flex", flexDirection: "column", overflowY: "scroll"}}>
                   <ScrollableChat messages = {messages} />     
                  </div>
                  )}
                  <FormControl onKeyDown={sendMessage} isRequired mt= {3}>
                    {isTyping ? <div>
                      <Lottie
                       options={defaultOptions}
                        width ={70}
                        style={{marginBottom: 15, marginLeft:0}}
                      />
                      </div> : <></>}
                    <Input 
                        variant = "filled"
                        bg="white"
                        placeholder="Type a message..."
                        onChange = {typingHandler}
                        value = {newMessage}
                    /> 
                  </FormControl>
          </Box>
          </>
      ) : (
        <Box d="flex" alignItems = "center" justifyContent= "center" h= "100%">
            <Text fontSize = "20px" pb = {3} >
                Select a chat
            </Text>

        </Box>
      )};
  </>
};

export default SingleChat;
