import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../client/components/Home';
import Navbar from '../client/components/Navbar';
import AllProducts from '../client/components/AllProducts';
import SingleProduct from '../client/components/SingleProduct';
import Footer from '../client/components/Footer';
import Login from '../client/components/Login';
import Cart from '../client/components/Cart';
import CreateAccount from './components/CreateAccount';

import { autoLogin } from './store/auth';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            {/* LK: will eventually need to set up so these routes are not available to loggedin users */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={CreateAccount} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
