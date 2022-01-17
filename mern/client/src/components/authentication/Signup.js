import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react';
import {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Signup = () => {
    const [name, setName ] = useState();
    const [email, setEmail ] = useState();
    const [confirmpassword, setConfirmpassword ] = useState();
    const [password, setPassword ] = useState();
    const [show, setShow ] = useState(false);
    const clickPressed = () => setShow(!show);
    const toast = useToast();
    const history = useHistory();

    const submitButton = async () => {
        
        if (!email || !name || !password || !confirmpassword){
            toast({
                title: "Missing a Field",
                status:"warning",
                duration: 3000,
                isClosable: true,
                position: 'bottom',
            });
            return;
        }
        if (password !== confirmpassword){
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

            const {data} = await axios.post("/api/user",{name, email, password}, config );
            toast({
                title: "Sucessfully Registered",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom"
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            history.push('/chats')
        } catch(error){
            toast({
                title: "Error",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }

    };
    return (
        <VStack spacing='5px'>
            <FormControl id= "first-name" isRequired>
                <FormLabel> Name </FormLabel>
                <Input 
                    placeholder = "Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />     
            </FormControl>
            <FormControl id= "email" isRequired>
                <FormLabel> Email </FormLabel>
                <Input 
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button size = "sm" bg="white" m={3} onClick={clickPressed}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id= "password" isRequired>
                <FormLabel> Confirm Password </FormLabel>
                <InputGroup>
                    <Input 
                        type= {show ? "text": "password"}
                        placeholder = "Confirm Password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
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
            >
                Sign up
            </Button>
            
        </VStack>
    )
}

export default Signup
