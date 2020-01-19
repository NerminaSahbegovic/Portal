import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 975px;
  margin-top: 210px;
  align-items: center;
  position: relative;
`;

export const CarouselArrow = styled.button`
  height: 45px;
  border-radius: 25px;
  padding: 5px;
  margin: 15px;
  border: none;
  color: grey;
  background-color: white;
`;

export const CarouselHeadlineDiv = styled.div`
  position: absolute;
  bottom: 4px;
  margin: 0 10px 0;
  height: 70px;
  width: 260px;
  background-color: #363636;
  opacity: 0.5;
  text-align: center;
  color: white;
`;
