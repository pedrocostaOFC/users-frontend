import React from "react";
import { useContext } from "react";
import { ClientContext, infoContacts } from "../../../providers/clientContext";
import { StyledDiv, StyledLi, StyledParag, StyledButton } from "./styles";
import { ContactContext } from "../../../providers/contactContext";


interface ContactGetAllProps {
  contact: infoContacts;
}

export const ContactGetAll: React.FC<ContactGetAllProps> = ({ contact }) => {
  const { selectedClientId, setSelectedClientId } =
    useContext(ClientContext);
  console.log(selectedClientId);

  const {FunctionContactDelete} = useContext(ContactContext)
  
  const handleRefresh = (id: number) => {
    FunctionContactDelete(id)
    window.location.reload();
  };

  return (
    <StyledLi>
      <StyledDiv>
        <StyledParag>Nome : {contact.fullname}</StyledParag> Email:{" "}
        <StyledParag>{contact.email}</StyledParag>
        <StyledParag>Telefone:{contact.telephone}</StyledParag>{" "}
        <StyledParag> Data de cadastro do cliente:{contact.createdAt}</StyledParag>
        <StyledButton onClick={() => handleRefresh(contact.id)}>
          Delete
        </StyledButton>
      </StyledDiv>
    </StyledLi>
  );
};
