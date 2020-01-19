import React from "react";
import { Layout } from "../style/layout";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaMailBulk
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <Layout
      displayFlex
      flexDirection="column"
      height="200px"
      width="50px"
      justifyAround
      alignCenter
      background="#d9dddc"
      position="fixed"
      top="28%"
    >
      <a href="">
        <FaFacebookF color="#3b5998" size="25" />
      </a>
      <a href="">
        <FaTwitter color="#1da1f2" size="25" />
      </a>
      <a href="">
        <FaInstagram color="#8a3ab9" size="25" />
      </a>
      <a href="">
        <FaGooglePlusG color="#4885ed" size="25" />
      </a>
      <a href="">
        <FaMailBulk color="#363636" size="25" />
      </a>
    </Layout>
  );
};

export default Sidebar;
