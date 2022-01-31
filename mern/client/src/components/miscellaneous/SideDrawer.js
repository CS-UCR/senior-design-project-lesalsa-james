import {Box, Text} from "@chakra-ui/layout";
import {Tooltip, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Drawer, useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, Input, toast, useToast} from "@chakra-ui/react";
import {BellIcon, ChevronDownIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/button";
import {Avatar} from "@chakra-ui/avatar";
import React, { useState } from 'react';
import { ChatState } from "../../context/ChatProvider";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const user = ChatState();
  const history = useHistory();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const toast = useToast();

  const handleSearch = async () => {
    if(!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position:"top-left",
      });
      return;
    }

    try {
      setLoading(true);
      
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
     
      // console.log(user.token);
      const { data } = await axios.get(`/api/user?search=${search}`,config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Ocurred!",
        description: "Failed to load search results",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"bottom-left",
      });
    }
  };

  const accessChat = (userId) => {

  }

  return (
  <>
  <Box d="flex" justifyContent={"space-between"} alignItems={"center"} bg="white" w="100%" p="5px 10px 5px 10px" borderWidth="5px">
    <Tooltip label="Search users to chat with" hasArrow placement='bottom-end'>
      <Button variant="ghost" onClick={onOpen}>
        <i className="fas fa-search"></i>
        <Text d={{base:"none", md:"flex"}} px="4">
          Search User
        </Text>
      </Button>
    </Tooltip>
    <Text fontSize ="2xl" fontFamily={"Work sans"}>
      GamersOnly
    </Text>
    <div>
    <Menu>
      <MenuButton p={1}>
        <BellIcon fontSize ="2xl" m={1}></BellIcon>
      </MenuButton>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
          <Avatar size={"sm"} cursor={"pointer"} name={user.name} /*src={user.pic}*/ ></Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => {history.push('/ProfilePage')}}>My Profile</MenuItem>
          <MenuDivider/>
          <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </Menu>
    </div>
  </Box>

  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay/>
    <DrawerContent>
      <DrawerHeader borderBottomWidth={"1px"}>Search Users</DrawerHeader>
      <DrawerBody>
        <Box d='flex' pb={2}>
          <Input placeholder="Search by name or email" mr={2} value={search} onChange={(e) => setSearch(e.target.value)}/>
          <Button onClick={handleSearch}>Go</Button>
        </Box>
        {loading ? (
          <ChatLoading/> 
        ) : (
          searchResult?.map((user) => (
            <UserListItem 
            key={user._id} 
            user={user} 
            handleFunction={() => accessChat(user._id)} 
            />
          ))
        )}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
  );
};

export default SideDrawer;
