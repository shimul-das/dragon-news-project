import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)