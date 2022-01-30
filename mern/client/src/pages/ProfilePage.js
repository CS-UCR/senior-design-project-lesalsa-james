import React, { Component, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useToast, Button, FormControl, FormLabel, Input, Container, Flex, VStack, Heading, Text, SimpleGrid, GridItem, Grid } from '@chakra-ui/react';
import axios from 'axios';



const ProfilePage = () => {
    const [name, setName ] = useState();
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    const [confirmPassword, setConfirmpassword ] = useState();
    const toast = useToast();

    const updateUser = async () => {
        if (!email || !name || !password || !confirmPassword){
            toast({
                title: "Missing a Field",
                status:"warning",
                duration: 3000,
                isClosable: true,
                position: 'bottom',
            });
            return;
        }
        if (password !== confirmPassword){
            toast({
                title: "Passwords Do Not Match",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: 'bottom',
            });
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const {data} = await axios.post("/api/user/update",{name, email, password}, config );
            toast({
                title: "Sucessfully Updated",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom"
            });
            localStorage.setItem('userInfo', JSON.stringify(data));

            // event.preventDefault();
            console.log(name, email, password, confirmPassword);
        } catch (error) {
            toast({
                title: "Error",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }
    }

    return (
    <Container maxW= "container.xl" p={0}>
        <Flex h="100vh" py={20}>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="white">
                <VStack spacing={3} alignItems="flex-start">
                    <Heading size="2xl">Edit Profile</Heading>
                    <Text>Your info here</Text>
                </VStack>

                <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="John Doe" 
                        />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Email" 
                        />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Change Password</FormLabel>
                        <Input 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter Password"
                        />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input 
                            onChange={(e) => setConfirmpassword(e.target.value)} 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            placeholder="Re-Enter Password"
                        />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button 
                    onClick={updateUser} 
                    size="lg" 
                    w="full" 
                    variant="solid" 
                    colorScheme="green"
                    >
                        Update 
                    </Button>
                </GridItem>
            </SimpleGrid>
            </VStack>
            
            <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">

            </VStack>
        </Flex>
    </Container>
    );
};
 
export default ProfilePage;