import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true };

createRoot(document.getElementById("root")!).render(
  <BrowserRouter future={routerFuture}>
    <App />
  </BrowserRouter>
);
