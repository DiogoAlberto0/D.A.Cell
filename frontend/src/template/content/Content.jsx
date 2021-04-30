import './Content.css'
import React from 'react'

//import { BrowserRouter } from 'react-router-dom'

import Routes from '../../main/Routes'

const Content = props => {
    return (
        // <BrowserRouter>
            <div className="content">
                <div className="camada01">
                    <div className="camada02">
                        <div className="camada03">
                            <div className="screen">
                                <div className="soundbar">
                                    <div className="sounbar-bar">
                                        
                                    </div>
                                </div>    
                                <Routes>
                                </Routes>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </BrowserRouter>
        
    )
}
export default Content