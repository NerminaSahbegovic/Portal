import React, { Component } from "react";
import FloatInputDiv from "./floatInputDiv";
import { ModalWrapper, Button, FormContainer } from "../style/style";

class LoginModal extends Component {
  state = {};
  render() {
    return (
      <>
        <ModalWrapper id="login">
          <h3>Welcome Back</h3>
          <FormContainer>
            <FloatInputDiv label={"E-mail address"} type={"text"} />
            <FloatInputDiv label={"Password"} type={"password"} />
            <Button
              onClick={this.props.hideModal}
              borderRadius="3px"
              absolute
              width="100%"
              height="50px"
              font
              bottom="10px"
              margin="15px 0 0"
              color="#fc6600"
            >
              Login to your Account
            </Button>
          </FormContainer>
        </ModalWrapper>
      </>
    );
  }
}

export default LoginModal;
