import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CounterStore from './CounterStore.js'
import UserStore from './CrudRedux/UserStore.js'
import RtkStore from './RTK/RtkStore.js'
import CoStore from './CoStore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={CoStore}>
    <App />
    </Provider>
  </StrictMode>,
)
