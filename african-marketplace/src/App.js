import React from 'react';
import './App.css';
import { Login, SignUp, Header, Footer, ItemForm, PrivateRoute, ItemList } from './components/index.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Routes Section Start */}
      <Switch>
        
        <Route exact path='/' render={(props) => <ItemList {...props} />} />
        <Route path='/login' component={Login} />
        <Route path='/signup' render={(props) => <SignUp {...props} />} />
        <PrivateRoute path='/item-form' component={ItemForm} />

      </Switch>
      {/* End of Routes Section */}
      <Footer />

    </div>
  );
}

export default App;
