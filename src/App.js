import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import courses from "./component/courses";
import Allcourses from "./component/Allcourses";
import AddCoures from "./component/AddCourse";
import Header from "./component/Header";
import Menus from "./component/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const btnHandle = () => {
    toast.success("done", {
      position: "top-center",
    });
  };
  return (
    <div>
      {" "}
      <Router>
        <ToastContainer />

        <Container>
          <Menus />
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
              <h2>
                <Home />
              </h2>
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add.courses" Component={AddCoures} exact />
                <Route path="/view.courses" Component={Allcourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
