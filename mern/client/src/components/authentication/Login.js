import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    const [show, setShow ] = useState(false);
    const clickPressed = () => setShow(!show);
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const history = useHistory();
    
    const submitButton = async () => {
        setLoading(true);
        if (!email || !password){
            toast({
                title: "Missing Field",
                status: "warning",
                duration: 3000,
                isClosable: "true",
                position: "bottom"
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            
            const { data } = await axios.post(
                "/api/user/login",
                {email, password },
                config
            );
            // :O
            toast({
                title: "Login Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push("/chat");
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration:3000,
                isClosable:true,
                position: "bottom",
            });
            setLoading(false);
        }
    };
    const guestLogin = () => {};
    return (
        <div>
            <VStack spacing='5px'>
            <FormControl id= "email" isRequired>
                <FormLabel> Email </FormLabel>
                <Input 
                    value={email}
                    placeholder = "Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />     
            </FormControl>
            <FormControl id= "password" isRequired>
                <FormLabel> Password </FormLabel>
                <InputGroup>
                    <Input 
                        type= {show ? "text": "password"}
                        placeholder = "Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button size = "sm" bg="white" m={3} onClick={clickPressed}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
    
            <Button
                colorScheme="blue"
                style={{marginTop: 15}}
                onClick={submitButton}
                width="100%"
                isLoading={loading}
            >
                Login
            </Button>
            <Button
                colorScheme="green"
                style={{marginTop: 15}}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
                width="100%"
            >
                Guest Login
            </Button>
        </VStack>
        </div>
    )
}

export default Login
