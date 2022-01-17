import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    const [show, setShow ] = useState(false);
    const clickPressed = () => setShow(!show);
    const submitButton = () => {};
    const guestLogin = () => {};
    return (
        <div>
            <VStack spacing='5px'>
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
    
            <Button
                colorScheme="blue"
                style={{marginTop: 15}}
                onClick={submitButton}
                width="100%"
            >
                Login
            </Button>
            <Button
                colorScheme="green"
                style={{marginTop: 15}}
                onClick={guestLogin}
                width="100%"
            >
                Guest Login
            </Button>
        </VStack>
        </div>
    )
}

export default Login
