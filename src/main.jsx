import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "@chakra-ui/theme";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
