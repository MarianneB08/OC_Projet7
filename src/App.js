import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Router from "./Router";
import "./styles/globals.scss";

// Mise en place du composant global App.js qui contient l'ensemble des routes de l'application et le layout général défini dans Layout.js
const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
  );
};

export default App;