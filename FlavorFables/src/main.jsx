import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { RecipeContextProvider } from './contexts/RecipeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecipeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </RecipeContextProvider>,
)
