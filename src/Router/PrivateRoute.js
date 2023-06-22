
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout";

const PrivateRoute = ({Component}) => {
  const auth = true; //your logic

  return auth ?
    <Layout>
      <Component />
    </Layout>
    : <Navigate to="/login" />
}




export default PrivateRoute;