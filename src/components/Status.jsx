import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box } from "@chakra-ui/react";

const Status = () =>{

const {isAuth,tokenNo } = useContext(AuthContext);

return (
    isAuth ? (<Box p={4} textAlign='center' >{`Token Number : ${tokenNo} - Login Status : ${isAuth}`}</Box>) : (<Box p={4} textAlign='center' >{`Login Status : ${isAuth}`}</Box>)
)
}

export default Status;