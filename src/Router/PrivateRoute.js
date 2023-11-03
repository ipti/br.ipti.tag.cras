
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout";
import { isAuthenticated } from "../services/localstorage";
import AplicationProvider from "../context/Aplication/context";

const PrivateRoute = ({ Component }) => {

  return isAuthenticated() ?
    <AplicationProvider>
      <Layout>
        <Component />
      </Layout>
    </AplicationProvider>
    : <Navigate to="/login" />
}




export default PrivateRoute;