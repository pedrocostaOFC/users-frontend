import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { Input } from "../../inputs/inputs";
import { ContactContext } from "../../../providers/contactContext";
import { FormsContactContainer, SubmitContact } from "./styled.form";
import { useNavigate } from "react-router-dom";

const formSchemaContact = yup.object().shape({
  fullname: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      "Senha deve conter no mínimo 6 caracteres e pelo menos uma letra maiúscula"
    ),
  telephone: yup.string().required("Telefone obrigatório"),
  zipCode: yup.string().required("CEP obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  street: yup.string().required("Nome da rua obrigatório"),
  country: yup.string().required("País obrigatório"),
});

interface IContactForm {
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

const CadastroContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(formSchemaContact),
  });

  const handleRefresh = () => {
    window.location.reload();
  };

    return (
      <FormsContactContainer onSubmit={handleSubmit(addContact)}>
        <Input
          label="Nome Completo"
          errors={errors.fullname}
          register={register("fullname")}
          type="text"
        />
        <Input
          label="Email"
          errors={errors.email}
          register={register("email")}
          type="email"
        />
        <Input
          label="Senha"
          errors={errors.password}
          register={register("password")}
          type="password"
        />
        <Input
          label="Telefone"
          register={register("telephone")}
          type="text"
          errors={errors.telephone}
        />
        <Input
          label="CEP"
          register={register("zipCode")}
          type="text"
          errors={errors.zipCode}
        />
        <Input
          label="Estado"
          register={register("state")}
          type="text"
          errors={errors.state}
        />
        <Input
          label="Cidade"
          register={register("city")}
          type="text"
          errors={errors.city}
        />
        <Input
          label="Nome da Rua"
          register={register("street")}
          type="text"
          errors={errors.street}
        />
        <Input
          label="País"
          register={register("country")}
          type="text"
          errors={errors.country}
        />
        <SubmitContact type="submit" onClick={handleRefresh}>Cadastrar Contato</SubmitContact>
      </FormsContactContainer>
    );
  };

  export default CadastroContactForm;