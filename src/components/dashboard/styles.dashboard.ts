import styled from "styled-components";

export const MenuContact = styled.div`
  min-width: 1280px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: black;
  font-size: 30px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 2px 60px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  height: 50px;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;

  li {
    width: 100%;
    padding: 20px 20px;
  }
`;
