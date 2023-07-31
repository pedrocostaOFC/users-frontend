import LoginForm from "../../components/loginForm/LoginForm";
import { ContainerLogin,  CadastroLink, LoginWrapper } from "./styled";


const LoginPage = () => (
  <>
    <LoginWrapper>
      <ContainerLogin>
        <h1>Faça o Login</h1>
        <LoginForm />
        <CadastroLink to="/register">Cadastre-se</CadastroLink>
      </ContainerLogin>
    </LoginWrapper>
  </>
);
export default LoginPage;
