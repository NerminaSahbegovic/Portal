import styled from "styled-components";

export const Layout = styled.div`
${props => (props.displayFlex ? "display: flex;" : "")}
${props => (props.flexWrap ? "flex-wrap: wrap;" : "")}
${props => (props.justifyAround ? "justify-content: space-around;" : "")}
${props => (props.width ? `width: ${props.width};` : "")}
${props => (props.height ? `height: ${props.height};` : "")}
${props => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
${props => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}
${props =>props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
${props => props.flexDirection ? `flex-direction: ${props.flexDirection};`:""}
${props => (props.alignCenter ? "align-items: center;" : "")}
${props => (props.position ? `position: ${props.position};` : "")}
${props => (props.background ? `background: ${props.background};` : "")}
${props => (props.top ? `top: ${props.top};` : "")}
`;
