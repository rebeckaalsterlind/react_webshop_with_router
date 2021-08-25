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
  Link,
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
          <h1><Link to="/" id="logo" >Web shop</Link></h1>
        </header>
        <aside>
          <nav>
            <ul>
              <li><Link to="/" className="link">Home</Link></li>
              <li onClick={handleToggle} ><Link to={'/products'} className="link">Products</Link></li>
                <ul id="subUl" className={isActive ? "show" : "hide"} > 
                  {prod.map(p => (<li key={p.id}><Link to={'/product/' + p.id + '/' + p.prodName} className="link">{p.prodName}</Link></li>))}
                </ul>
              <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
          </nav>
        </aside>
                  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id/:prodName" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;

// <Link to={'/product/' + p.id + '/' + p.prodName}