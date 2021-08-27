import React, { useState } from "react";
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";
import NotFound from "./NotFound";

import {
  BrowserRouter as Router, 
  Route, 
  NavLink,
  Switch
} from "react-router-dom";

const prod = require('./products/produkter.json');

function App() {

  const [isActive, setActive] = useState(false);
  const handleToggle = () => setActive(!isActive);

  return (
    <div className="App">
      
      <Router>
        <header>    
          <h1><NavLink exact activeClassName="active-link" to="/" id="logo" >Web shop</NavLink></h1>
        </header>
        <aside>
          <nav>
            <ul>
              <li><NavLink exact activeClassName="active-link" to="/" className="link">Home</NavLink></li>
              <li onClick={handleToggle} ><NavLink activeClassName="active-link" to={'/products'} className="link">Products</NavLink></li>
                <ul id="subUl" className={isActive ? "show" : "hide"} > 
                  {prod.map(p => (<li key={p.id}><NavLink exact activeClassName="active-link" to={'/product/' + p.id + '/' + p.prodName} className="link">{p.prodName}</NavLink></li>))}
                </ul>
              <li><NavLink exact activeClassName="active-link" to="/contact" className="link">Contact</NavLink></li>
            </ul>
          </nav>
        </aside>
                  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" render={() => <Products id={"3"} />} />
          <Route path="/product/:id/:prodName" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;


// dont have props to send component={() => <Products />}
// have props to send render={() => <Products id={"3"} />}