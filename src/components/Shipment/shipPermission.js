
import React from 'react';

import { useAuth } from "../Login/useAuth";
import {Route, Redirect  } from "react-router-dom";

export const PrivateRoute =({ children, ...rest})=>{
    const auth= useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


