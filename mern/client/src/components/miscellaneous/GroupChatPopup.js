import { Box, Button, Divider, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import React, {useState} from 'react';
import { ChatState } from '../../context/ChatProvider';
import {FormControl} from '@chakra-ui/form-control';
import axios from 'axios';
import UserListItem from '../UserAvatar/UserListItem';
import UserBadgeItem from '../UserAvatar/UserBadgeItem';

const GroupChatPopup = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [groupChatName, setGroupChatName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const { user, chats, setChats } = ChatState();

    const handleSearch = async (query) => {
        setSearch(query);
        if(!query){
            return;
        }
        try {
            setLoading(true);

            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const {data} = await axios.get(`/api/user?search=${search}`, config);
            console.log(data);
            setLoading(false);
            setSearchResult(data);

        }catch (error){
            toast ({
                title: "Error Occurred",
                description: "Cannot load search results",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: 'bottom-left'
            });
        }
    };

    const handleSubmit = async() => {
        if (!groupChatName || !selectedUsers) {
            toast({
                title: "Missing Fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        try {
            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const {data} = await axios.post("/api/chat/group", {
                name: groupChatName,
                users: JSON.stringify(selectedUsers.map((u) => u._id)),
            },
            config);
            setChats([data, ...chats]);
            onClose();
            toast({
                title: "Created New Group Chat",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        } catch (error) {
            toast({
                title: "Error Creating Group Chat",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }
    };
    
    //deleting users by checking if ID is in selected user array
    const handleDelete = (deleteUser) => {
        setSelectedUsers( selectedUsers.filter((sel) => sel._id !== deleteUser._id));
    };

    const handleGroup = (userToAdd) => {
        if (selectedUsers.includes(userToAdd)){
            toast({
                title: "User already included",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        setSelectedUsers([...selectedUsers, userToAdd])
    };
  
  
    return (
        <>
          <span onClick={onOpen}>{children}</span>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize="32px" justifyContent = "center" d="flex"> Create Group Chat</ModalHeader>
              <ModalCloseButton />
              <ModalBody alignItems="center" d="flex" flexDir="column">
                    <FormControl>
                        <Input placeholder="Chat Name" mb={3} onChange = {(e) => setGroupChatName(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <Input placeholder="Add Users" mb={3} onChange = {(e) => handleSearch(e.target.value)}/>
                    </FormControl>
                    <Box w="100%" d = "flex" flexWrap="wrap">
                    {selectedUsers.map( u=> (
                        <UserBadgeItem key = {user._id} user={u} handleFunction = {() => handleDelete(u)}

                        />
                        ))}
                        </Box>
                    {loading?<div> loading</div> : (
                        searchResult?.slice(0,4).map( user => (
                            <UserListItem key={user._id} user= {user} handleFunction={()=> handleGroup(user)} />
                        ))
                    )}
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                  Create Chat
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
};

export default GroupChatPopup;
