import RegisterForm from "../../components/loginForm/CadastroForm/CadastroForm";
import {
  ContainerCadastro,
  CadastroWrapper,
  LoginLink,
} from "./styled";


const CadastroPage = () => (
  <CadastroWrapper>
    <ContainerCadastro>
      <h1>Registra-se</h1>
      <RegisterForm />
    <LoginLink to="/">
      Login
    </LoginLink>
    </ContainerCadastro>
  </CadastroWrapper>
);
export default CadastroPage;
