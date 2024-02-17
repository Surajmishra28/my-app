import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus = () => {
  return (
    <ListGroup>
      <Link tag="a" to="/">
        Home
      </Link>
    </ListGroup>
  );
};
export default Menus;
