import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css'

const Title = props => {
    return(
        <div className="header-smartphone">
            <Link to={props.link} className="link-header-smartphone">{props.title}</Link>
        </div>
    )
}
export default Title