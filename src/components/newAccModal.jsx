import React, { Component } from "react";
import FloatInputDiv from "./floatInputDiv";
import { ModalWrapper, Button, FormContainer } from "../style/style";

class NewAccModal extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <ModalWrapper primary>
        <h3 padding="15px">Create An Account</h3>
        <FormContainer primary>
          <div className="name">
            <FloatInputDiv primary label={"First Name"} type={"text"} />
            <FloatInputDiv mleft label={"Last Name"} type={"text"} />
          </div>

          <FloatInputDiv label={"Date of Birth"} />
          <FloatInputDiv label={"E-mail address"} />
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
            Create Account
          </Button>
        </FormContainer>
      </ModalWrapper>
    );
  }
}

export default NewAccModal;
