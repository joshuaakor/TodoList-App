import React from 'react';
import {BrowserRouter} from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {DoneContextProvider} from './store/DoneContext';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <DoneContextProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </DoneContextProvider>
       
    </React.StrictMode>
);