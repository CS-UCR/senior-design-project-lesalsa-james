import { Box, FormControl, Spinner, Text, Input } from '@chakra-ui/react';
import React, {useState} from 'react';
import { getSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';
import UpdatedGroupChatPopup from './miscellaneous/UpdatedGroupChatPopup';

const SingleChat = ({fetchAgain, setFetchAgain }) => {
  
 const [messages, setMessage] = useState([]);
 const [loading, setLoading] = useState(false);
 const [newMessage, setNewMessage] = useState();

 const sendMessage = () => {}
 const typingHandler = () => {}

 const{ user, selectedChat, setSelectedChat } = ChatState();
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
                <UpdatedGroupChatPopup fetchAgain = {fetchAgain} setFetchAgain = {setFetchAgain}/>
                </>
            )}

          </Text>
          <Box d= "flex" flexDir = "column" justifycontent="flex-end" ps={3} bg="#E8E8E8" h= "100%" w="100%" borderRadius = "lg" overflowY= "hidden">
          {!loading ? 
                  <Spinner w={20} h={20} alignSelf="center" margin= "auto"/> : (
                  <div>
                   {/* Messages */}      
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
