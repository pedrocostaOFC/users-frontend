import { Routes, Route } from "react-router-dom";
import { AuthLogin } from "../components/authenticationLogin/authenticationLogin";
import { AuthToken } from "../components/authenticationToken/authenticationToken";
import Dashboard from "../components/dashboard/dasboard";
import RegisterPage from "../pages/cadastro/Cadastropage";
import LoginPage from "../pages/login/loginpage";



const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLogin />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
      <Route element={<AuthToken />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default Router;
