import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import NotFound from "./NotFound";


import {
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch
} from "react-router-dom";


const prod = [
  {"id": 12578, "prodName": "Night Black", "price": 499, "image": "sko1.jpg"},
  {"id": 8874, "prodName": "Secret Camo", "price": 699, "image": "sko2.jpg"},
  {"id": 159753, "prodName": "Harvesta", "price": 799, "image": "sko3.jpg"},
  {"id": 12, "prodName": "Casual Blue", "price": 399, "image": "sko4.jpg"}
]



function App() {
  return (
    <div className="App">

      <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link>
                <ul>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/products/:product?/:color?" component={Products} />
            <Route path="*" component={NotFound} />
          </Switch>

      </Router>

    </div>
  );
}

export default App;
