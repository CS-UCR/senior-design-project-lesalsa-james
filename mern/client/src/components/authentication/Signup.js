import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'


const Signup = () => {
    const [name, setName ] = useState();
    const [email, setEmail ] = useState();
    const [confirmpassword, setConfirmpassword ] = useState();
    const [password, setPassword ] = useState();
    const [show, setShow ] = useState(false);
    const clickPressed = () => setShow(!show);
    const submitButton = () => {};
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
                Sign up
            </Button>
            
        </VStack>
    )
}

export default Signup
