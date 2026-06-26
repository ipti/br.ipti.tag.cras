
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout";
import { AplicationContext } from "../context/Aplication/context";
import AplicationProvider from "../context/Aplication/context";
import { isAuthenticated } from "../services/localstorage";
import { hasPermission } from "../permissions";

const PrivateRoute = ({ Component }) => {
  return isAuthenticated() ?
    <AplicationProvider>
      <Layout>
        <Component />
      </Layout>
    </AplicationProvider>
    : <Navigate to="/login" />
}

const PermissionGuard = ({ Component, permission }) => {
  const { user } = useContext(AplicationContext);

  if (!user) return null;

  if (!hasPermission(user.role, permission)) return <Navigate to="/" />;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export const SecretaryRoute = ({ Component, permission }) => {
  if (!isAuthenticated()) return <Navigate to="/login" />;

  return (
    <AplicationProvider>
      <PermissionGuard Component={Component} permission={permission} />
    </AplicationProvider>
  );
};

export default PrivateRoute;
