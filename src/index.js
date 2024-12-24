import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import './index.css';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Authorization"] =
  `jwt ${localStorage.getItem("access_token")}` || "";
axios.defaults.headers.common["accept"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <ToastContainer position="top-center" />
  </>
);
