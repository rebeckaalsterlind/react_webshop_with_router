import "./Product.css";

const prod = require('./products/produkter.json');

function Product(props) {
 
 const result = prod.find( ({ id }) => id.toString() === props.match.params.id );
 let url = require('./products/' + result.image);

  return (
    <main className="Product">
      <h2>{props.match.params.prodName}</h2>
      <h3>{result.price}:-</h3>
      <img src={url.default} alt={"Shoe in color " + result.prodName}/>
    </main>
  );
}

export default Product;
