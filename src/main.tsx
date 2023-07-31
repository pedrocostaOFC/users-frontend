import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./providers/clientContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <BrowserRouter>
    <ClientProvider>
      <App />
    </ClientProvider>
  </BrowserRouter>

);
