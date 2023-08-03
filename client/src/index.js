import React from "react";
import "./index.css";
import App from "./App";
import AuthProvider from "contexts/AuthContext";
import ModalProvider from "contexts/ModalContext";
import EventsProvider from "contexts/EventsContext";
import FormModalProvider from "contexts/FormModalContext";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <EventsProvider>
          <FormModalProvider>
            <App />
          </FormModalProvider>
        </EventsProvider>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
