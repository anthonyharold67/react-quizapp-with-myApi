import {createContext,useState} from 'react'
import {
    toastErrorNotify,
    toastSuccessNotify,
  } from ".././helpers/ToastNotify";
import axios from "axios"
import React from "react";
export const AuthContext = createContext()

const url = "https://drf-myquizapp.herokuapp.com/"

const AuthContextProvider= (props) => {
    
      
      // export const [auth, setAuth] = React.useState(true);
      const [currentUser, setCurrentUser] = useState();
      const [myKey, setMyKey] = useState();
      
      const createUser = async (email,password,navigate,firstName,lastName,userName) => {
          try {
            const res = await axios.post(`${url}users/register/`, {
              username: userName,
              email: email,
              first_name: firstName,
              last_name: lastName,
              password: password,
              password2: password
              });
              console.log(res)
            toastSuccessNotify("User registered successfully.Please login to continue")
            navigate("/login")
            
          }
          catch(error) {
          //  alert(error.message)
            toastErrorNotify(error.message)
          }
        
        }
      
        const signIn =async (email,password,userName,navigate)=>{
          try {     
            const res = await axios.post(`${url}users/auth/login/`, {
              username: userName,
              email: email,
              password: password  
              });
            const myToken = await res.data.key  
            console.log(res.status)
            if(myToken){
                console.log(res)
                setMyKey(myToken)
                setCurrentUser(res.data.user.username)
                console.log(res.data.user.username);
                console.log("asda987636");
                
                toastSuccessNotify("User logged in successfully")
                navigate("/")
            }  
            
          }
          catch(error) {
          //  alert(error.message)
            toastErrorNotify(error.message)
          }
          
        }
       const logOut = async (navigate) => {
          try {
              const res = await axios.post(`${url}users/auth/logout/`)
              if (res.status === 200) {
                toastSuccessNotify("User logout successfully")
                setCurrentUser(false)
                navigate("/")
              }
              console.log(res)
          } catch (error) {
            toastErrorNotify(error.message)
          }
              
          
          
          
      };
      
    
    // useEffect(() => {
    //     userObserver(setCurrentUser)
    // },[])
    // console.log(currentUser)
    let value={
        currentUser,
        createUser,
        signIn,
        logOut,
        myKey

    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;