import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
const Menus = () => {
  return (
    <ListGroup>
      <Link className="border border-light-subtle p-2 ps-3 rounded-top text-secondary text-decoration-none" tag="a" to="/">
        Home
      </Link>
      <Link className="border border-light-subtle p-2 ps-3 text-secondary text-decoration-none" tag="a" to="/">
        Add Course
      </Link>
      <Link className="border border-light-subtle p-2 ps-3 text-secondary text-decoration-none" tag="a" to="/">
        View Courses
      </Link>
      <Link className="border border-light-subtle p-2 ps-3 text-secondary text-decoration-none" tag="a" to="/">
        About
      </Link>
      <Link className="border border-light-subtle p-2 ps-3 rounded-bottom text-secondary text-decoration-none" tag="a" to="/">
        Contact
      </Link>
    </ListGroup>
  );
};
export default Menus;
