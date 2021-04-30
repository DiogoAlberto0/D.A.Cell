import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Home from '../views/Home/Home'
import Client from '../views/Cliente/Client'
import Singin from '../views/Singin/Singin'
import Register from '../views/Register/Register'
import Adminchamados from '../views/Admin/adminChamados/AdminChamados'
import AdminClientes from '../views/Admin/adminClientes/adminCliente'

const routes = props => {
    return(
        <Switch>
            <Route exact path="/" component={Singin} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/adminchamados" component={Adminchamados} />
            <Route exact path="/adminclientes" component={AdminClientes} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}
export default routes