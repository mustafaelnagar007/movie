import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import Context from './context/Context.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
       
          <App />
        
       
    </ThemeProvider>
  </StrictMode>
)