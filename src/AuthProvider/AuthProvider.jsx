import React, { children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

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
                  setUser(currentUser)
                  setLoading(false)
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