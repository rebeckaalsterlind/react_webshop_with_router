import React, { Component } from 'react'

const prod = require('./products/produkter.json');
console.log('data', prod);

function Product(props) {
 
 const result = prod.find( ({ id }) => id == props.match.params.id );
 let url = require('./products/' + result.image);
 console.log('url', url.default);
  return (
    <div className="Product">
      <h2>{result.prodName}</h2>
      <p>{result.price}:-</p>
      <img src={url.default} alt="test" />
    </div>
  );
}

export default Product;
