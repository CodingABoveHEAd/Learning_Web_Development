import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
background-color:red;
}
`;

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: auto;
  color: white;
`;

export const Items = styled.div`
  height: inherit;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
  & a {
    text-decoration: none;
    color: #ffcc00;
  }
`;
