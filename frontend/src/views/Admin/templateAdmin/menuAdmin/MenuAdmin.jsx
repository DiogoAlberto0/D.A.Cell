import React from 'react'
import { Link } from 'react-router-dom'
import './MenuAdmin.css'

const Menu = props => {
    return(
        <div className="menu-admin">
            <div className="menu-admin-items">
                <div className="menu-admin-item">
                    <Link to="/adminchamados" className="menu-admin-link">Chamados</Link>
                </div>
                <div className="menu-admin-item">
                    <Link to="/adminclientes" className="menu-admin-link">Clientes</Link>
                </div>
            </div>
        </div>
    )
}
export default Menu