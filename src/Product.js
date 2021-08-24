import React, { Component } from 'react'

const prod = require('./produkter.json');
console.log('data', prod);

function Product(props) {
 
 const result = prod.find( ({ id }) => id == props.match.params.id );

 console.log('result', result);
  return (
    <div className="Product">
      <h2>{result.prodName}</h2>
      <p>{result.price}:-</p>
      <img src="./../products/sko1.jpg" alt="Girl in a jacket" />
    </div>
  );
}

export default Product;
