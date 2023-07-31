import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRouter from "./routes/routes.tsx";
import { ClientProvider } from "./providers/clientContext.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRouter />
    </>
  );
}

export default App;
