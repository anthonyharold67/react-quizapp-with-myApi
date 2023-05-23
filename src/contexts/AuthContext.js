import {createContext,useState} from 'react'
import {
    toastErrorNotify,
    toastSuccessNotify,
  } from ".././helpers/ToastNotify";
import axios from "axios"
import React from "react";


export const AuthContext = createContext()

const url = "https://sekunev.pythonanywhere.com/"

const AuthContextProvider= (props) => {
    
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
              if(res.data.token){
                setMyKey(res.data.token)
                setCurrentUser(res.data.username)
                toastSuccessNotify("User registered successfully.Please login to continue")
                navigate("/") 
            } 
          }
          catch(error) {
            toastErrorNotify(error.message)
          }
        }
      
    const signIn =async (email,password,navigate,userName)=>{
          try {     
            const res = await axios.post(`${url}users/auth/login/`, {
              username: userName,
              email: email,
              password: password  
              });
            const myToken = await res.data.key  
            console.log(res.status)
            if(myToken){
                setMyKey(myToken)
                setCurrentUser(res.data.user.username)
                console.log(res.data);
                toastSuccessNotify("User logged in successfully") 
                navigate("/") 
            } 
            
          }
          catch(error) {
            toastErrorNotify(error.message)
          }  
        }
    const logOut = async (navigate) => {
          try {
              const res = await axios.post(`${url}users/auth/logout/`)
              if (res.status === 200) {
                toastSuccessNotify("User logout successfully")
                setCurrentUser(false)
                setMyKey(false)
                
                navigate("/")
              }
              console.log(res)
          } catch (error) {
            toastErrorNotify(error.message)
          } 
      };
      
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