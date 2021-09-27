import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product.id}`}>
        <Card.Img src={product.image} height="150px" width="200px" fluid />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title as="h2">
            <strong className="text-capitalize">{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h5">
          <div className="my-3">Price : ₹{product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
