import { Box, FormControl, Spinner, Text, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { getSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';
import ScrollableChat from '../components/ScrollableChat';
import UpdatedGroupChatPopup from './miscellaneous/UpdatedGroupChatPopup';
import './styles.css'

const SingleChat = ({fetchAgain, setFetchAgain }) => {
  
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(false);
 const [newMessage, setNewMessage] = useState();

 const toast = useToast();
 
 const fetchMessages = async (event) => {
  //if not selected chat do nothing 
  if (!selectedChat) {
     return;
   }
   try {
    const config = {
      headers: {
        Authorization:`Bearer ${user.token}`,
      },
    };

    setLoading(true);

    const {data} = await axios.get(`/api/message/${selectedChat._id}`, config);
    console.log(messages);
    setMessages(data);
    setLoading(false);

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
 const{ user, selectedChat, setSelectedChat } = ChatState();
 useEffect( () => {
   fetchMessages();
 }, [selectedChat]);
 
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
 }
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
          <Box d= "flex" flexDir = "column" justifycontent="flex-end" ps={3} bg="#E8E8E8" h= "100%" w="100%" borderRadius = "lg" overflowY= "hidden">
          {!loading ? 
                  <Spinner w={20} h={20} alignSelf="center" margin= "auto"/> : (
                  <div className="messages">
                   <ScrollableChat messages = {messages}/>     
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
