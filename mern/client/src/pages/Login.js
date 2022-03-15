import React from 'react'
import {Box, Container, Text, Tab, Tabs, TabList, TabPanel, TabPanels} from "@chakra-ui/react"
import Login from "../components/authentication/Login"; 
import Signup from "../components/authentication/Signup"; 
import { useHistory } from "react-router";
import { useEffect } from "react";




const LogIn = () => {
  
  const history = useHistory(); // change to const

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if(user) history.push("/chat");
  }, [history]);

    return (
        <Container maxW = "x1" centerContent>
            <Box
          
                justifyContent="center"
                p={3}
                bg={"white"}
                w= "50%"
                m= "40px 0 15px 0"
                borderRadius = "lg"
                borderWidth = "1px"
                >
                <Text fontSize="4x1" color="black" textAlign="center"> Hello Gamer </Text>
            </Box>
            <Box bg="white" w = "50%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs variant='soft-rounded'>
  <TabList>
    <Tab width="50%">Login</Tab>
    <Tab width = "50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </TabPanels>
</Tabs>
            </Box>
        </Container>
    )
}

export default LogIn
