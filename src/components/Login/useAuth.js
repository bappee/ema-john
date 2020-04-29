import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useState } from "react";
import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';





firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

 export const AuthContextProvider =(props)=>{
  const auth= Auth();
  return  <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>

}
  export const useAuth =()=> useContext(AuthContext);


  //after onchanges , user k update korar jnno ekta funtion use kora hocce

const getUser =user=>{
  const {displayName, email, photoURL} = user;
  return {name : displayName, email, photo:photoURL};
}

 


const Auth=()=>{
      const [user,setUser]= useState(null);

   

  const signInWithGoogle=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    //after placing return
    return firebase.auth().signInWithPopup(provider)
    .then(res=>{
   const singedInUser = getUser(res.user)
    setUser(singedInUser);
    return res.user
    })
    .catch(err=>{
        // console.log(err);
        setUser(null)
        return err.message;
    })
   
  }

  const signOut=()=>{
    //after placing return 
   return firebase.auth().signOut().then(function() {
        setUser(null)
        return true;
      }).catch(function(error) {
        return false;
      });
  }

  //set later for using auth hook to another place

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(usr) {
      if (usr) {
        const currUser = getUser(usr)
        setUser(currUser);
      } else {
        // No user is signed in.
      }
    });
  },[])

  return{
      user,
      signInWithGoogle  ,
      signOut
   }
}

export default Auth;