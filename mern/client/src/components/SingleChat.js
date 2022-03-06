import { Box, FormControl, Spinner, Text, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { getSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';
import ScrollableChat from './ScrollableChat';
import UpdatedGroupChatPopup from './miscellaneous/UpdatedGroupChatPopup';
import io from 'socket.io-client'

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(false);
 const [newMessage, setNewMessage] = useState();
 const{ user, selectedChat, setSelectedChat } = ChatState();
 const [socketConnected, setSocketConnected] = useState(false);
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
  
  socket.on('connection', () => setSocketConnected(true));
}, []);


 useEffect(() => {
  fetchMessages();

  selectedChatCompare = selectedChat;
}, [selectedChat]);

useEffect(() => {
  socket.on("message received", (newMessageReceived) => {
    if(!selectedChatCompare || selectedChatCompare._id  !== newMessageReceived.chat._id) {
      //give noti
    } else {
      setMessages([...messages, newMessageReceived]);
    }
  })
}, );
 
 const sendMessage = async (event) => {
   if (event.key === "Enter" && newMessage) {
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
 }


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
