
import React from "react";
import "./App.js";
import Routes from "./Router/router";
import "./assets/css/styles.css";

import 'primeicons/primeicons.css';


import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/react-query";
import "/node_modules/primeflex/primeflex.css";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
export default App;