import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Definindo o formato das propriedades que o contexto irá fornecer
interface IProps {
  functionRegister: (data: IregisterForm) => void;
  functionClientEdit: (data: TupdateClient) => void;
  clientsGet: Tlistclients[];
  contactsGet: infoContacts[];
  functionLogin: (data: ILoginForm) => void;
  functionClientRemove: (id: number) => void;
  selectedClientId: number | null;
  setSelectedClientId: React.Dispatch<React.SetStateAction<number | null>>;
  ClientsRefresh: () => Promise<void>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}


// Criando o contexto para o cliente
export const ClientContext = createContext({} as IProps);

// Definindo os tipos de dados que serão usados
interface iCadastroChildrenProps {
  children: React.ReactNode;
}
interface Ttoken {
  tokenClient: string;
}

interface IregisterForm {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean | null;
  password: string;
}

interface ILoginForm {
  email: string;
  password: string;
}
interface iLoginUser {
  token: string;
}
interface infoClient {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  password: string;
  createdAt: string;
}

interface TupdateClient {
  fullname?: string | null | undefined;
  email?: string | null | undefined;
  telephone?: string | null | undefined;
  admin?: boolean | null | undefined;
  password?: string | null | undefined;
}
export interface Tlistclients {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  createdAt: string;
}
interface clientAuthentication {
  id: number;
  fullname: string;
  email: string;
}

export interface infoContacts {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  zipCode: string;
  city: string;
  street: string;
  state: string;
  country: string;
  createdAt?: string | Date;
}


export const ClientProvider = ({ children }: iCadastroChildrenProps) => {
  const navigate = useNavigate();

  // Definindo estados iniciais
  const [useLogin, setUserLogin] = useState({} as iLoginUser);
  const [clientInfo, setClientInfo] = useState({} as infoClient[]);
  const [clientsGet, setClientsGet] = useState<Tlistclients[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [clientRemove, setRemoveClient] = useState();
  const [clientDataAuthentication, setClientDataAuthentication] =
    useState({} as clientAuthentication);
  const [isAdmin, setIsAdmin] = useState(false);
  const [contactsGet, setContactsGet] = useState<infoContacts[]>([]);

  // Função para atualizar a lista de clientes
  const ClientsRefresh = async () => {
    try {
      const res = await api.get("/clients");
      setClientsGet(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Função para atualizar a lista de contatos
  const contactsRefresh = async () => {
    try {
      const res = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });

      setContactsGet(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    contactsRefresh();
    setClientDataAuthentication;
  },[]);

  // Função para cadastrar um novo cliente
  const functionRegister = async (data: IregisterForm) => {
    try {
      const response = await api.post("/clients", data);
      setClientInfo(response.data);
      toast.success("Usuário criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // Função para fazer login
  const functionLogin = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);
      console.log(response);
      let token = localStorage.setItem("@TokenClient", response.data.token);
      setUserLogin(response.data);
      setClientDataAuthentication(response.data.client);
      console.log(response.data.client);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error("Usuário não encontrado");
    }
  };


  const tokenClient = localStorage.getItem("@TokenClient");

  // Função para editar as informações de um cliente
  const functionClientEdit = async (data: TupdateClient) => {
    console.log(isAdmin, selectedClientId, clientDataAuthentication.id);
    try {
      if (isAdmin || selectedClientId === clientDataAuthentication.id) {
        const response = await api.patch(
          `/clients/${selectedClientId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${tokenClient}`,
            },
          }
        );

        ClientsRefresh();

        if (response.status === 200) {
          toast.success("Cliente alterado com sucesso");
        } else {
          toast.error("Resposta inesperada do servidor");
        }
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        toast(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };

  // Função para remover um cliente
  const functionClientRemove = async (id: number) => {
    try {
      if (isAdmin || selectedClientId === clientDataAuthentication.id) {
        const response = await api.delete(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${tokenClient}`,
          },
        });
        console.log(response);

        if (selectedClientId === id) {
          setSelectedClientId(null);
        }

        ClientsRefresh();

        toast.success("Cliente removido com sucesso!");
      }
    } catch (error: any) {
      if (error.response) {
        console.log("Erro na requisição:", error.response.data);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(
          "Erro na requisição (sem resposta do servidor):",
          error.request
        );
      } else {
        console.log("Erro:", error.message);
      }
    }
  };

  // Retornando o contexto Provider com as funções e estados definidos
  return (
    <>
      <ClientContext.Provider
        value={{
          functionRegister,
          functionLogin,
          clientsGet,
          contactsGet,
          functionClientEdit,
          functionClientRemove,
          selectedClientId,
          setSelectedClientId,
          ClientsRefresh,
          isAdmin,
          setIsAdmin,
        }}
      >
        {children}
      </ClientContext.Provider>
    </>
  );
};