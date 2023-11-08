import React, { children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext()
const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
      const [user,setUser]= useState(null);
      const [loading,setLoading]= useState(true);

      const createUser =(email,password,info) =>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password,info);
      }
      const logIn = (email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut= ()=>{
            setLoading(true);
            return signOut(auth)
      }

      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                  // console.log(currentUser);
                  const userEmail = currentUser?.email || user?.email;
                  const loggedUser = {email:userEmail}
                  setUser(currentUser)
                  setLoading(false)
                  //if user exists then issue a token 
                  if(currentUser){
                        axios.post(' https://assignment-11-server-side-jet.vercel.app/jwt', loggedUser,{withCredentials: true})
                              .then(res =>{
                                    console.log('token response', res.data);
                              })
                  }else{
                        axios.post(' https://assignment-11-server-side-jet.vercel.app/logout', loggedUser,{withCredentials:true})
                              .then(res =>{
                                    console.log(res.data);
                              })
                  }
            })
            return ()=>{
                 
                  unSubscribe()
            }
      },[])


const authInfo={
      user,
      loading,
      createUser,
      logIn ,
      logOut
}

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;