import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

interface IContactProps {
    children: React.ReactNode;
}

// Criando o contexto para os contatos+
export interface infoContacts {
    fullname: string;
    email: string;
    password: string;
    telephone: string;
    zipCode: string;
    city: string;
    street: string;
    state: string;
    country: string;
    createdAt?: string | Date;
}

interface Ttoken {
    tokenClient: string;
}

interface IContactContextProps {
    addContact: (contact: infoContacts) => void;
    FunctionContactDelete: (id: number) => void;
    // setContact: React.Dispatch<React.SetStateAction<infoContacts>>;
}



export const ContactContext = createContext({} as IContactContextProps);

export const ContactProvider = ({ children }: IContactProps) => {

    // const [contact, setContact] = useState([])
    
    let token = localStorage.getItem("@TokenClient");
    const addContact = async (data: infoContacts ) => {
        const response = await api.post("/contacts", data, {
        
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        // setContact(response.data)
    }

    const FunctionContactDelete =async (id:number) => {
        const DeletedContact = await api.delete(`/contacts/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    return (
        <>
          <ContactContext.Provider
            value={{
              addContact,
              FunctionContactDelete,
            //   setContact
            }}
          >
            {children}
          </ContactContext.Provider>
        </>
      );

}
