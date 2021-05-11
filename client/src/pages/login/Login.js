import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SignInOrUp from "../../components/loginConponents/SignInOrUp";
import "./login.css";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const refForms = useRef(null);
  const showForm = () => {
    setisLogin(!isLogin);
    const toRemove = isLogin
      ? ["bounceRight", "bounceLeft"]
      : ["bounceLeft", "bounceRight"];
    refForms.current.classList.remove(toRemove[0]);
    refForms.current.classList.add(toRemove[1]);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitform = (e) => {
    e.preventDefault();
    isLogin ? console.log("login") : console.log("sign up");
    setUser({ username: "", email: "", password: "" });
  };

  return (
    <div
      style={{ background: "#D3D3D3", minHeight: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Container style={{ position: "relative" }} fluid="lg">
        <Row>
          <SignInOrUp
            title="Don't have an account ?"
            body="Create a new account and join the app's family !"
            action="Sign up"
            onClick={showForm}
          />
          <SignInOrUp
            title="Have an account ?"
            body="login now and get in touch with your friends !"
            action="Login"
            onClick={showForm}
          />
        </Row>
        <Row ref={refForms} className="bounceRight form-login">
          {/* login */}
          <Col>
            <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>
            <Form
              onSubmit={submitform}
              className="d-flex flex-column justify-content-center w-75 mx-auto "
            >
              {isLogin || (
                <Form.Control
                  className="mt-0 mb-3"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                />
              )}
              <Form.Control
                className="mt-0 mb-3"
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <Form.Control
                className="mb-4"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <Button
                className="ms-auto"
                variant="outline-primary"
                type="submit"
              >
                {isLogin ? "LOG IN" : "SIGN UP"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
