import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, ListGroup, Alert } from "react-bootstrap";
import { addToCart, deleteFromCart } from "../actions/cartActions";

function CartScreen({ match, history }) {
  const productId = match.params._id;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const checkOut = () => {
    history.push("/login?redirect=checkOutDone");
  };

  const removeItemFromCart = (itemId) => {
    dispatch(deleteFromCart(itemId));
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Cart </h1>
        {cartItems.length === 0 ? (
          <Alert variant="warning">
            Please add items to the cart to proceed
            <Link to="/home"> GO TO HOME</Link>
          </Alert>
        ) : (
          <ListGroup variant="flush" as="h1" className="text-capitalize">
            {cartItems.map((item) => (
              <ListGroup.Item>
                <Row>
                  <Col md={3} sm={2}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} sm={1}>
                    ₹{item.price}
                  </Col>

                  <Col md={1} sm={2}>
                    <Button
                      type="button"
                      variant="info"
                      onClick={() => removeItemFromCart(item.product)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>Order Details</h2>
            <h1>
              Total: ₹{cartItems.reduce((acc, item) => acc + item.price, 0)}
            </h1>
          </ListGroup.Item>

          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={checkOut}
            >
              CheckOut
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default CartScreen;
