
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout";
import { isAuthenticated } from "../services/localstorage";

const PrivateRoute = ({Component}) => {

  return isAuthenticated() ?
    <Layout>
      <Component />
    </Layout>
    : <Navigate to="/login" />
}




export default PrivateRoute;