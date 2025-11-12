import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//import '@fontsource-variable/inter'
// import '@fontsource/poppins/600.css'
// import '@fontsource-variable/space-grotesk'
// import '@fontsource/roboto';
// import '@fontsource/open-sans';

import './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
