/* IMPORTA StrictMode
   Sirve para detectar posibles problemas en React */
import { StrictMode } from 'react'

/* IMPORTA createRoot
   Permite conectar React con el HTML */
import { createRoot } from 'react-dom/client'

/* IMPORTA BrowserRouter
   Activa el sistema de rutas */
import { BrowserRouter } from 'react-router-dom'

/* IMPORTA LA APLICACIÓN PRINCIPAL */
import App from './App.jsx'

/* Renderiza la aplicación en el div #root */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)