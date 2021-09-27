import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { listProductItems } from "../actions/productActions";

function DisItemScreen({ match, history }) {
  // const product = products.find((p) => p.id == match.params._id);
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productItem);

  const { loading, error, product } = productItem;

  useEffect(() => {
    dispatch(listProductItems(match.params._id));
  }, [dispatch, match]);

  const addToCart = () => {
    history.push(`/cart/${match.params._id}`);
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        { error }
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} width="500px" height="500px" fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1 className="text-capitalize">{product.name}</h1>
              </ListGroup.Item>

              <ListGroup.Item>
                <strong>Price: ₹{product.price}</strong>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button onClick={addToCart} className='btn-block type="button'>
                  {" "}
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default DisItemScreen;
