import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const Overlay = styled.div`
  background: black;
  position: fixed;
  opacity: 0.5;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  color: white;
  background: ${props => props.color};
  border: none;
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => (props.position ? "absolute" : "")};
  top: 270px;
  right: 200px;
  bottom: ${props => props.bottom};
  margin: ${props => props.margin};
  font: ${props => (props.font ? "bold 18px 'Ubuntu', sans-serif" : "")};

  @media (max-width: 768px) {
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background: white;
  width: 500px;
  height: ${props => (props.primary ? "470px" : "370px")};
  border: solid 1px #ccc;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  h3 {
    text-align: center;
    padding-top: ${props => props.padding};
    font-weight: bold;
    font-size: 22px;
  }
`;

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  align-items: center;
  display: flex;
  background-color: #d9dddc;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  justify-content: flex-end;
  align-items: center;
  height: 60px;

  @media (max-width: 768px) {
  }
`;

export const NavbarItem = styled.a`
  font-size: 15px;
  margin-right: 30px;
  color: ${props => (props.primary ? "#fc6600" : "#a0a0a0")};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (max-width: 768px) {
  }
`;

export const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 5%;
  width: 200px;
  height: 40px;
`;

export const FormContainer = styled.div`
  position: absolute;
  background: white;
  width: 90%;
  height: ${props => (props.primary ? "75%" : "60%")};
  border-radius: 5px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  .name {
    display: flex;
  }
`;

export const FloatDiv = styled.div`
  position: relative;
  padding: 0;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #e9e9e9;

  input {
    border: none;
    outline: 0;
    font-size: 16px;
    font-weight: bold;
    padding: 20px 0 10px 5px;
    width: 97%;
    background-color: #e9e9e9;
  }

  label {
    position: absolute;
    color: grey;
    background-color: #e9e9e9;
    padding-left: 3px;
  }
`;

export const Img = styled.img`
  width: 260px;
  height: 210px;
  margin: 0 10px 0;
`;
