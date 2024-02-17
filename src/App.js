import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Allcourses} exact />
                <Route path="/add.courses" Component={AddCoures} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
