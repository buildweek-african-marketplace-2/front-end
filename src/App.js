import React from 'react';
import './Styles.css';

import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UpdateItem from './components/UpdateItem';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <NavLink className="link" exact to='/items'>Marketplace</NavLink>
        <NavLink className="link" exact to="/item-form">Add Item</NavLink>
        <NavLink className="link" exact to="/login">Login</NavLink>
        <NavLink className="link" exact to='/register'>Register</NavLink>
        <NavLink className="link" exact to='/'>Home</NavLink>
        </header>
        <Route path="/login" component={Login} />
        <Route path='/register' component={SignUp} />
        <Route path='/update-item/:id' component={UpdateItem} />
        <Route path="/items" component={ItemList} />
        <Route path='/item-form' component={ItemForm} />
      </div>
    </Router>
  );
}

export default App;
