import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product"
import NotFound from "./NotFound";

import {
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch
} from "react-router-dom";

const prod = require('./produkter.json');
console.log('data', prod);

function App() {


  return (
    <div className="App">

      <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Products
                <ul> 
                  {prod.map(p => (<li key={p.id}><Link to={'product/' + p.id}>{p.prodName}</Link></li>))}
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/product/:id" component={Product} />
            <Route path="*" component={NotFound} />
          </Switch>

      </Router>

    </div>
  );
}

export default App;
