import React, { Component } from "react";
import axios from "axios";
import { Card, Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import swal from "@sweetalert/with-react";

class Register extends Component {
  state = {
    data_user: {
      fullName: "",
      email: "",
      password: ""
    },
    warningMessage: ""
  };

  // Submit form register
  onRegister = event => {
    event.preventDefault();

    // cek form di front end
    if (this.state.data_user.fullName === "") {
      this.setState({ warningMessage: "*Nama lengkap tidak boleh kosong!" });
    } else if (this.state.data_user.email === "") {
      this.setState({ warningMessage: "*Email tidak boleh kosong!" });
    } else if (
      this.state.data_user.email.includes("@") === false ||
      this.state.data_user.email.includes(".") === false
    ) {
      this.setState({ warningMessage: "*Format email salah!" });
    } else if (this.state.data_user.password === "") {
      this.setState({ warningMessage: "*Password tidak boleh kosong!" });
    } else {
      axios
        .post("http://localhost:4000/users", this.state.data_user)
        .then(regis => {
          if (regis.data.status === "dataAda") {
            swal(
              "Email sudah terdaftar!",
              "Klik tombol dibawah untuk lupa password..",
              "error"
            );
          } else {
            swal(
              "Terima kasih sudah daftar Kak!",
              "Lanjut login ya.. ",
              "success"
            );
          }
        });

      // state form dikosongkan
      this.setState({
        data_user: {
          fullName: "",
          email: "",
          password: ""
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <center>
            <h2>Belum punya akun?</h2>
            <p>Silakan daftar Kak!</p>
          </center>
          {/* Register Form */}
          <Card body style={{ marginBottom: "30px" }}>
            <Form>
              <FormGroup row>
                <Label sm={4}>Nama</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Nama Lengkap Anda"
                    value={this.state.data_user.fullName}
                    onChange={event => {
                      let data_userCopy = this.state.data_user;
                      data_userCopy.fullName = event.target.value;
                      this.setState({
                        data_user: data_userCopy
                      });
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4}>Email</Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Anda"
                    value={this.state.data_user.email}
                    onChange={event => {
                      let data_userCopy = this.state.data_user;
                      data_userCopy.email = event.target.value;
                      this.setState({
                        data_user: data_userCopy
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
                    value={this.state.data_user.password}
                    onChange={event => {
                      let data_userCopy = this.state.data_user;
                      data_userCopy.password = event.target.value;
                      this.setState({
                        data_user: data_userCopy
                      });
                    }}
                  />
                </Col>
              </FormGroup>
              <p className="text-danger">{this.state.warningMessage}</p>
              <FormGroup check row>
                <Col sm={{ size: 4, offset: 4 }}>
                  <Button color="success" onClick={this.onRegister}>
                    DAFTAR
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

export default Register;
