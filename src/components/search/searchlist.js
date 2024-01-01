import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchlist.css";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <br></br>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" id="box1">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                width="300px"
                height="300px"
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <h3>{product.rating}</h3>
                <h2 className="card-text">${product.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
