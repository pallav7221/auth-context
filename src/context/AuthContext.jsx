import React,{createContext} from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [isAuth,setIsAuth] = React.useState(false);
    const [tokenNo,setTokenNo] = React.useState();
    const fetchData = async () =>{
        try {
            let userDetails = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
            const res = await fetch(`https://reqres.in/api/login`,{
                method:"POST",
                body:JSON.stringify(userDetails),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            let data = await res.json();
            console.log(data)
            setIsAuth(true);
            setTokenNo(data.token);
        } catch (error) {
            console.log(error);
        }
    }

    const toggleAuth = ()=>{
        setIsAuth(!isAuth);
    }
    return (
        <>
        <AuthContext.Provider value={{isAuth,toggleAuth,fetchData,tokenNo}}>
            {children}
        </AuthContext.Provider>
        
        
        </>
    )


}

export {AuthContext,AuthContextProvider} ;