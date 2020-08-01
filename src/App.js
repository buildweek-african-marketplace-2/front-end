import React, { useState, useEffect } from 'react';
import './Styles.css';

import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';

import { HeaderStyle, FooterStyle } from './components/StyledComponents';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = () => {
      axios
        .get('https://afrikan-market.herokuapp.com/api/items')
        .then(res => {
          console.log(res);
          setItems(res.data);
        })
        .catch(err => console.log('something went wrong', err))
    };
    getItems();
  }, [])

  return (
    <Router>
      <div className="App">
        <HeaderStyle className="App-header">
        <NavLink className="link" exact to='/items'>Marketplace</NavLink>
        <NavLink className="link" exact to="/item-form">Add Item</NavLink>
        <NavLink className="link" exact to="/login">Login</NavLink>
        <NavLink className="link" exact to='/register'>Register</NavLink>
        <NavLink className="link" exact to='/'>Account</NavLink>
        </HeaderStyle>
        <Route path="/login" component={Login} />
        <Route path='/register' component={SignUp} />
        <Route path="/items" render={props => <ItemList {...props} items={items} />} />
        <Route path='/item-form' component={ItemForm} />
      </div>
      <FooterStyle />
    </Router>
  );
}

export default App;
