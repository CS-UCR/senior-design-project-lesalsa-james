import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { getSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';
import UpdatedGroupChatPopup from './miscellaneous/UpdatedGroupChatPopup';

const SingleChat = ({fetchAgain, setFetchAgain }) => {
  
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
              {/* Messages  */}
          </Box>
          </>
      ) : (
        <Box d="flex" alignItems = "center" justifyContent= "center" h = "100%">
            <Text fontSize = "20px" pb = {3} >
                Select a chat
            </Text>

        </Box>
      )};
  </>
};

export default SingleChat;
