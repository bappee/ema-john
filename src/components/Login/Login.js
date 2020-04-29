import React from 'react';
import Auth from './useAuth';

const Login = () => {
   const auth= Auth();
   const handleSignIn=()=>{
       auth.signInWithGoogle()
       .then(res=>{
           window.location.pathname="/review"
       })
   }

   const handleSignOut=()=>{
    auth.signOut()
    .then(res=>{
        window.location.pathname="/"
    });
   }


    return (
        <div>
            <h1>This is login</h1>
            { auth.user ? <button className="text-center bg-danger text-light d-flex justify-content-center" onClick={handleSignOut}>Sign Out</button> :
                <button className="text-center bg-danger text-light" onClick={handleSignIn} >Sign In</button>
                }
        </div>
    );
};

export default Login;