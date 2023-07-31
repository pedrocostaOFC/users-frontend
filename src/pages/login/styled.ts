import styled from "styled-components";
import { Link } from "react-router-dom";



export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 1, 0.1) 0px 2px 0px 4px;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: black;
  }
`;

export const CadastroLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 9px;
  color: red;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
