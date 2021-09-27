import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/orderActions";

function CheckOutScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  return (
    <div>
      <Alert variant="info">
        Order Placed Successfully{" "}
        <Alert.Link>
          <button onClick={() => window.location.reload(false)}>Done!</button>
        </Alert.Link>
      </Alert>
    </div>
  );
}

export default CheckOutScreen;
