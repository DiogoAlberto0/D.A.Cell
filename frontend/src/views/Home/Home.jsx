import React from 'react'
import Title from '../defaultViews/Title'
import {Link} from 'react-router-dom'

import './Home.css'
const Home = props => {
    return(
        <div className="home">
            <Title title="home" link="/home" />
            <div className="home-container">
                <div className="home-content-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="home-content-buttoms">
                    <div className="buttom-decline">
                        <Link to="/" className="link">Sair</Link>
                    </div>
                    <div className="buttom-accept">
                        <Link to="/client" className="link">Solicitar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home