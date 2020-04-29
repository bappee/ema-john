import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetails from './components/Productdetails/Productdetails';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';
import { PrivateRoute } from './components/Shipment/shipPermission';




  


function App() {

  return (
    <div >
   
   <AuthContextProvider>
     

     <Header></Header>

     <Router>
       <Switch>
        <Route path="/shop">
         <Shop></Shop>
        </Route>
        <Route path="/review">
         <Review></Review>
        </Route>

        <Route path="/inventory">
           <Inventory></Inventory>
        </Route>

        <Route exact path="/">
           <Shop></Shop>
          </Route>
           
          
          <Route path="/product/:productKey">
            <Productdetails></Productdetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path ="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>


        <Route path="*">
         <Notfound></Notfound>
        </Route>


       </Switch>
     </Router>
     
     </AuthContextProvider>
    </div>
  );
}

export default App;
