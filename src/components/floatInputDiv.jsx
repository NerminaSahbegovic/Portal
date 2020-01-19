import React, { Component } from "react";
import { FloatDiv } from "../style/style";

class FloatInputDiv extends Component {
  state = {};
  render() {
    return (
      <>
        <form action="">
          <FloatDiv style={{ marginLeft: this.props.mleft ? "20px" : "" }}>
            <label>{this.props.label}</label>
            <input type={this.props.type} />
          </FloatDiv>
        </form>
      </>
    );
  }
}

export default FloatInputDiv;
