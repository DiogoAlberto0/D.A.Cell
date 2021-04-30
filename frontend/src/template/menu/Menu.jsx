import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
const Menu = props => {
    return (
        <aside className="menu">
            <div className="menu-div">
                <div className="menu-items"><Link to="/home" className="menu-link">Dafgo telefonia</Link></div>
            </div>
            <div className="menu-div">
                <div className="menu-items"><Link to="/client" className="menu-link">Abrir chamado</Link></div>
                <div className="menu-items"><Link to="/adminchamados" className="menu-link">Admin</Link></div>
                <div className="menu-items"><Link to="/" className="menu-link">Sair</Link></div>
            </div>  
        </aside>
        
    )
}
export default Menu