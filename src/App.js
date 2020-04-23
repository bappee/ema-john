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

  
function App() {
  return (
    <div >
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

        <Route path="*">
         <Notfound></Notfound>
        </Route>


       </Switch>
     </Router>
     
     
      
    </div>
  );
}

export default App;
