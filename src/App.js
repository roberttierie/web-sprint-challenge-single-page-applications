import React, {useState} from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Pizza from './pizza'

const App = () => {
  return (
    <>
    <nav>
    <div><Link to ='/'>Home</Link></div>
    <div><Link to ='./pizza.js'>Order Here</Link></div>
    </nav>
      <h1>Lambda Eats</h1>
      <Switch>
      <Route path='/' component={Pizza}/>
          <div>Homepage</div>
          <Link to='./pizza'><button>Make Pizza</button></Link>

      </Switch>
    </>
  );
};
export default App;
