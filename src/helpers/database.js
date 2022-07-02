import {
  toastErrorNotify,
  toastSuccessNotify,
} from "./ToastNotify";
import axios from "axios"

const url = "https://drf-myquizapp.herokuapp.com/"
export const createUser = async (email,password,navigate,firstName,lastName,userName) => {
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
      toastSuccessNotify("User registered successfully")
      navigate("/")
    }
    catch(error) {
    //  alert(error.message)
      toastErrorNotify(error.message)
    }
  
  }

  export const signIn =async (email,password,userName,navigate)=>{
  
  
    try {
      
      const res = await axios.post(`${url}users/auth/login/`, {
        username: userName,
        email: email,
        password: password  
        });
        console.log(res)
      toastSuccessNotify("User login successfully")

      navigate("/")
    }
    catch(error) {
    //  alert(error.message)
      toastErrorNotify(error.message)
    }
    
  }
  export const userObserver = (setCurrentUser)=>{
    // => {
    //   if (currentUser) {  
    //     setCurrentUser(currentUser)
        
        
    //   } else {
    //     setCurrentUser(false);
    //   }
    // });
  }
export const logOut = async () => {
    try {
        const res = await axios.post(`${url}users/auth/logout/`)
        if (res.status === 200) {
                toastSuccessNotify("User logout successfully")
        }
        console.log(res)
    } catch (error) {
      toastErrorNotify(error.message)
    }
        
    
    
    
};

