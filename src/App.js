import React, {useState} from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Pizza from './pizza'

const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([])
  return (
    <>
    <nav>
    <div><Link to ='/'>Home</Link></div>
    <div><Link to ='./pizza.js'>Order Here</Link></div>
    </nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
          <div>Homepage</div>
          <Link to='./pizza'><button>Make Pizza</button></Link>
          <Pizza />
    </>
  );
};
export default App;
