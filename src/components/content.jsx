import React, { Component } from "react";
import { Layout } from "../style/layout";

class Content extends Component {
  state = {
    containers: [
      { name: "Weather" },
      { name: "Currency calculator" },
      { name: "World watch" },
      { name: "Radio" }
    ]
  };
  render() {
    return (
      <Layout displayFlex flexWrap width="100%" justifyAround paddingTop="50px">
        {this.state.containers.map((container, index) => (
          <Layout
            key={index}
            width="300px"
            height="250px"
            backgroundColor="#D6CFC7"
            borderRadius="10px"
            color="white"
            textAlign="center"
          >
            <p>{container.name} Widget</p>
          </Layout>
        ))}
      </Layout>
    );
  }
}

export default Content;
