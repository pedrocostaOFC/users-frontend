import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ContactGetAll } from "./renderContacts/renderContact";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContactList, PageWrapper, Title, MenuContact, DivContainer } from "./styles.dashboard";
import CadastroContactForm from "./editClient/CadastroContactForm";


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { contactsGet, ClientsRefresh } =
    useContext(ClientContext);
  useEffect(() => {
    async () => await ClientsRefresh();
  }, []);

  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }
  return (
    <>
      <MenuContact>
        <Title>Pagina do Clientes</Title>
        <Button type="button" onClick={navigateLogin}>
          Sair
        </Button>
      </MenuContact>
    <DivContainer>
      <CadastroContactForm/>
      <PageWrapper>
        <ContactList>
          {contactsGet.map((contact) => (
            <ContactGetAll key={contact.id} contact={contact} />
          ))}
        </ContactList>
      </PageWrapper>
      </DivContainer>
    </>
  );
};

export default Dashboard;
