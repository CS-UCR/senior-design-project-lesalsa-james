import { Tooltip, Avatar } from '@chakra-ui/react';
import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { isLastMessage, isSameSender } from '../config/ChatLogics';
import { ChatState } from '../context/ChatProvider';

const ScrollableChat = ({messages}) => {
    const { user } = ChatState()

    return (
    <ScrollableFeed>
        {messages && messages.map((m,i) => (
            <div style = {{ display: "flex"}} key = {m._id} >
                {
                    (isSameSender(messages,m,i,user._id)
                    || isLastMessage(messages,i,user._id)
                    ) && <Tooltip>
                        label = {m.sender.name}
                        placement = "bottom-start"
                        hasArrow
                        <Avatar
                        mt ="7px"
                        mr={2}
                        size={"sm"}
                        cursor="pointer"
                        name={m.sender.name}/*src={user.pic}*/
                    />
                    </Tooltip> 
                }
            </div>
        ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat;