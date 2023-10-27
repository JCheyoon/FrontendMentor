import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalProvider } from "./context/modalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ModalProvider>
      <App />
    </ModalProvider>
  </>,
);
