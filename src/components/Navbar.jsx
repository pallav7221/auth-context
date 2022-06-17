import { Button, Box } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () =>{
    const {fetchData,isAuth,toggleAuth} = useContext(AuthContext);
    return (
        <>
           <Box w="100%" h="50px" bg="teal" float="right">
            {
                isAuth ? <Button onClick={() => { toggleAuth() }} >Logout</Button> : <Button onClick={() => { fetchData() }} >Login</Button>
            }
           </Box>
                
            
        </>
    )
}

export default Navbar;