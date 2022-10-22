import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// Components
import App from './pages/index'

// Context
import PlayerContextProvider from './contexts/players';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <PlayerContextProvider>
            <App />
        </PlayerContextProvider >
    </BrowserRouter>
);
