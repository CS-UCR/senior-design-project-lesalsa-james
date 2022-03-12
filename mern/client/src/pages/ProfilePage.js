import React, { Component, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useToast, Button, FormControl, FormLabel, Input, Container, Flex, VStack, Heading, Text, SimpleGrid, GridItem, Grid, Select } from '@chakra-ui/react';
import axios from 'axios';



const ProfilePage = () => {
    const [name, setName ] = useState();
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    const [confirmPassword, setConfirmpassword ] = useState();
    const [game, setGame ] = useState();
    const [rank, setRank ] = useState();
    const [playstyle, setPlaystyle ] = useState();
    const [numPlayers, setNumPlayers ] = useState();
    const toast = useToast();

    const [testVal, setTest ] = useState();

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

            const {data} = await axios.post("/api/user/update",{name, email, password, game, rank, playstyle, numPlayers}, config );
            toast({
                title: "Sucessfully Updated",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom"
            });
            localStorage.setItem('userInfo', JSON.stringify(data));

            // event.preventDefault();
            console.log(name, email, password, confirmPassword, game, rank, playstyle, numPlayers);
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

    const searchTest = async () => {
        console.log(testVal);
    }

    return (
    <Container maxW= "container.xl" p={0}>
        <Flex h="100vh" py={20}>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="white">
                <VStack spacing={3} alignItems="flex-start">
                    <Heading size="2xl">Edit Profile</Heading>
                    {/* <Text>Hello...</Text> */}
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
                    <FormControl>
                        <FormLabel>Preferences</FormLabel>
                        <Select
                            bg='#81E6D9'
                            borderColor='#81E6D9'
                            color='black'
                            placeholder='Select Game: '
                            onChange={(e) => setGame(e.target.value)}
                        >
                        <option value='Valorant'>Valorant</option>
                        <option value='Leagoe of Legends'>League of Legends</option>
                        </Select>
                        <Select
                            bg= '#4FD1C5'
                            borderColor='#4FD1C5'
                            color='black'
                            placeholder='Select Rank: '
                            onChange={(e) => setRank(e.target.value)}
                        >
                        <option value='Bronze'>Bronze</option>
                        <option value='Silver'>Silver</option>
                        <option value='Gold'>Gold</option>
                        <option value='Platinum'>Platinum</option>
                        <option value='Diamond'>Diamond</option>
                        </Select>
                        <Select
                            bg='#38B2AC'
                            borderColor='#38B2AC'
                            color='black'
                            placeholder='Select Playstyle: '
                            onChange={(e) => setPlaystyle(e.target.value)}
                        >
                        <option value='Casual'>Casual</option>
                        <option value='Competitive'>Competitive</option>
                        </Select>
                        <Select
                            bg='#319795'
                            borderColor='#319795'
                            color='black'
                            placeholder='Select Number Of Players: '
                            onChange={(e) => setNumPlayers(e.target.value)}
                        >
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        </Select>
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
                <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Test</FormLabel>
                            <Input 
                                onChange={(e) => setTest(e.target.value)} 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="John Doe" 
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button 
                        onClick={searchTest} 
                        size="lg" 
                        w="full" 
                        variant="solid" 
                        colorScheme="green"
                        >
                            Test 
                        </Button>
                </GridItem>
                </SimpleGrid>
            </VStack>

            
        </Flex>
    </Container>
    );
};
 
export default ProfilePage;