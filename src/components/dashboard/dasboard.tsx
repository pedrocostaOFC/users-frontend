import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ContactGetAll } from "./renderContacts/renderContact";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContactList, PageWrapper, Title, MenuContact } from "./styles.dashboard";


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { contactsGet, ClinetsRefresh } =
    useContext(ClientContext);
  useEffect(() => {
    async () => await ClinetsRefresh();
  }, []);

  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }
  return (
    <>
      <MenuContact>
        <Title>Pagina de Clientes</Title>
        <Button type="button" onClick={navigateLogin}>
          Sair
        </Button>

      </MenuContact>
      <PageWrapper>
        <ContactList>
          {contactsGet.map((contact) => (
            <ContactGetAll key={contact.id} contact={contact} />
          ))}
        </ContactList>
      </PageWrapper>
    </>
  );
};

export default Dashboard;
