
import React from "react";
import "./App.js";
import Routes from "./Router/router";
import "./assets/css/styles.css";
// import "./assets/css";


import 'primeicons/primeicons.css';


import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
// import "./assets/css/theme.css"
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/react-query";
import "/node_modules/primeflex/primeflex.css";
// import { ReactQueryDevtools } from 'react-query'


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes />
    </QueryClientProvider>
  )
}
export default App;