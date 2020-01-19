import React, { Component } from "react";
import {
  AppWrapper,
  NavWrapper,
  CardWrapper,
  NavbarItem,
  Button,
  Logo,
  Overlay
} from "../style/style";
import NewAccModal from "./newAccModal";
import LoginModal from "./loginModal";
import portallogo from "../assets/portallogo.png";
import SearchBar from "./searchBar";
import { FaHome } from "react-icons/fa";

class Navbar extends Component {
  state = {
    showModal: false,
    id: ""
  };

  openModal = event => {
    this.setState({ showModal: !this.state.showModal, id: event.target.id });
  };

  hideModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  modalRender = () => {
    switch (this.state.id) {
      case "account":
        return <NewAccModal hideModal={this.hideModal} />;

      case "login":
        return <LoginModal hideModal={this.hideModal} />;

      default:
        return <React.Fragment />;
    }
  };

  getRoute = name => {
    window.location = `http://localhost:3000/${name}`;
  };

  render() {
    return (
      <AppWrapper>
        <NavWrapper>
          <a href="http://localhost:3000/">
            <Logo src={portallogo} />
          </a>

          <CardWrapper>
            <SearchBar />

            <NavbarItem>
              <FaHome onClick={() => this.getRoute("")} />
            </NavbarItem>
            <NavbarItem onClick={() => this.getRoute("lifestyle")}>
              Lifestyle
            </NavbarItem>
            <NavbarItem onClick={() => this.getRoute("sport")}>
              Sport
            </NavbarItem>
            <NavbarItem onClick={() => this.getRoute("fashion")}>
              Fashion
            </NavbarItem>
            <NavbarItem onClick={() => this.getRoute("favorites")}>
              Favorites
            </NavbarItem>

            <NavbarItem id="login" primary onClick={this.openModal}>
              Login
            </NavbarItem>

            <NavbarItem>
              <Button
                id="account"
                onClick={this.openModal}
                borderRadius="20px"
                padding="8px"
                color="#fc6600"
              >
                New Account
              </Button>
            </NavbarItem>
          </CardWrapper>
        </NavWrapper>

        {this.state.showModal && (
          <>
            <Overlay />
            {this.modalRender()}
          </>
        )}
      </AppWrapper>
    );
  }
}

export default Navbar;
