import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementsByTagName('header')[0] as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementsByTagName('main')[0] as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementsByTagName('footer')[0] as HTMLElement).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
