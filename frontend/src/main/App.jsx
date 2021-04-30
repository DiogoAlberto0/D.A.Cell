import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../template/menu/Menu'
import Content from '../template/content/Content'
// import Routes from './Routes'
import Footer from '../template/footer/Footer'
const App = props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Menu />
                {/* <Routes /> */}
                <Content />
                <Footer />
            </div>
        </BrowserRouter>
        
    )
}
export default App