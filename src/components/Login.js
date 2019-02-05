import React, { Component } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Card, Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // Submit form login
  onLogin = event => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(login => {
        console.log(login);
        if (login.data.status === "failedEmail") {
          swal(
            "Maaf kak, akun yang dimasukkan salah!",
            "cek lagi ya..",
            "error"
          );
        } else if (login.data.status === "failedPassword") {
          swal(
            "Maaf Kak, password yang dimasukkan salah!",
            "cek lagi ya..",
            "error"
          );
        } else {
          swal(
            "Selamat datang Kak!",
            "ayo mulai 3D printing..",
            "success"
          ).then(() => {
            this.props.history.push("/");
          });
        }
      });
  };

  render() {
    return (
      <div>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <center>
            <h2>Hai Kak!</h2>
            <p>Silakan masuk dan mulai 3D printing kamu.</p>
          </center>
          {/* Login Form */}
          <Card body style={{ marginBottom: "30px" }}>
            <Form>
              <FormGroup row>
                <Label sm={4}>Email</Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Anda"
                    value={this.state.email}
                    onChange={event => {
                      this.setState({
                        email: event.target.value
                      });
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Password </Label>
                <Col sm={8}>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={event => {
                      this.setState({
                        password: event.target.value
                      });
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 4, offset: 4 }}>
                  <Button color="success" onClick={this.onLogin}>
                    MASUK
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Login;
