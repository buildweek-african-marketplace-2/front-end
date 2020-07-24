import React, { useState, useEffect } from 'react';
import './Styles.css';

import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = () => {
      axios
        .get('https://afrikan-market.herokuapp.com/api/items')
        .then(res => {
          setItems(res.data);
        })
        .catch(err => console.log('something went wrong', err))
    };
    getItems();
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <NavLink exact to='/items'>Marketplace</NavLink>
        <NavLink exact to="/item-form">Add Item</NavLink>
        <NavLink exact to='/'>Home</NavLink>
        </header>
        <Route path="/items" render={props => <ItemList {...props} items={items} />} />
        <Route path='/item-form' component={ItemForm} />
      </div>
    </Router>
  );
}

export default App;
