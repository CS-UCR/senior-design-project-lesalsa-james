import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats"
import ChatBox from "../components/ChatBox"

const Chat = () => {
    const { user } = ChatState();

    return (
        <div style={{width: "100%"}}>
            {user && <SideDrawer/>}
            <Box>
                {user && <MyChats/>}
                {user && <ChatBox/>}
            </Box>
        </div>
    );
};  

export default Chat;
