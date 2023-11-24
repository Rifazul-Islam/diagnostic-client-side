import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const  AuthContext = createContext(null)
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true)
 
 const newUserCreate = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
 }


 
 // user Profile Update 
 const userProfileUpdate = (userInfo ,profile)=>{
    setLoading(true)
    return updateProfile(userInfo,profile)
   }
  
   // singOut 
   const loginOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
  
   // user login
   const userLogin = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
  

   // On Auth State

 useEffect( ()=>{
    const unSubscribe= onAuthStateChanged(auth, currentUser=>{
      console.log(currentUser);
       setUser(currentUser)
       setLoading(false)
   })
  
   if(user){
    return setLoading(false)
   }
  
   return ()=>{
     unSubscribe()
   }
  
   },[user,loading])
  
  



 const authInfo = {
    user,
    loading,
    newUserCreate,
    userProfileUpdate,
    userLogin,
    loginOut

 }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;