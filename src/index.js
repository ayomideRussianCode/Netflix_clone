import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import  { firebase } from './lib/firebase.prod';

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);


root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
