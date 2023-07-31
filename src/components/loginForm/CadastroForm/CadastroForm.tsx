import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Input } from "../../inputs/inputs";
import { ClientContext } from "../../../providers/clientContext";
import { FormsContainer, SubmitBut } from "./styled.form";


const formchemaCadastro = yup.object().shape({
  fullname: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  telephone: yup.string().required("Telefone obrigatório"),
  admin: yup.boolean().default(false).nullable(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      "Senha deve conter no mínimo 6 caracteres e pelo menos uma letra maiúscula"
    ),
});
interface ICadastLoginForm {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean | null;
  password: string;
}
const CadastroForm = () => {
  const { functionRegister } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastLoginForm>({
    resolver: yupResolver(formchemaCadastro),
  });

  return (
    <FormsContainer onSubmit={handleSubmit(functionRegister)}>
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
        type="telephone"
        errors={errors.telephone}
      />
      <SubmitBut type="submit">Cadastrar</SubmitBut>
    </FormsContainer>
  );
};

export default CadastroForm;
