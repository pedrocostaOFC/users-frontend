import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ButtonStyle, FormStyle } from "./styled";
import { Input } from "../inputs/inputs";

const formsSchemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      "Senha no minimo 6 caracteres, e com uma letra maiuscula"
    ),
});
interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { functionLogin } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formsSchemaLogin),
  });

  return (
    <FormStyle onSubmit={handleSubmit(functionLogin)}>
      <Input
        label="Email"
        errors={errors.email}
        register={register("email")}
        type="text"
      />
      <Input
        label="Senha"
        errors={errors.password}
        register={register("password")}
        type="password"
      />
      <ButtonStyle type="submit">Entrar</ButtonStyle>
    </FormStyle>
  );
};

export default LoginForm;
