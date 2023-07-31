import React from "react";
import { useContext } from "react";
import { ClientContext, infoContacts } from "../../../providers/clientContext";
import { StyledDiv, StyledLi, StyledParag, StyledButton } from "./styles";


interface ContactGetAllProps {
  contact: infoContacts;
}

export const ContactGetAll: React.FC<ContactGetAllProps> = ({ contact }) => {
  const { selectedClientId, setSelectedClientId } =
    useContext(ClientContext);
  console.log(selectedClientId);

  return (
    <StyledLi>
      <StyledDiv>
        <StyledParag>Nome Completo: {contact.fullname}</StyledParag> Email:{" "}
        <StyledParag>{contact.email}</StyledParag>
        <StyledParag>Telefone:{contact.telephone}</StyledParag>{" "}
        <StyledParag> Data de cadastro do cliente:{contact.createdAt}</StyledParag>
        <StyledParag>Nome Completo: {contact.fullname}</StyledParag> Email:{" "}
        <StyledParag>{contact.email}</StyledParag>
        <StyledButton>
          Atualizar ou Excluir o Cliente
        </StyledButton>
      </StyledDiv>
    </StyledLi>
  );
};
