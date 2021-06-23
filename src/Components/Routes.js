import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Create_Admin from '../Pages/Admin_Panel/Manage_Admin/Create_Admin';
import List_Admin from '../Pages/Admin_Panel/Manage_Admin/List_Admin';
import Edit_Admin from '../Pages/Admin_Panel/Manage_Admin/Edit_Admin';



export default function Routes() {

    return (
        <Switch>
            <Route exact path='/admin/create' component={Create_Admin} />
            <Route exact path='/admin/list' component={List_Admin} />
            <Route exact path='/admin/edit/:id' component={Edit_Admin} />


        </Switch>
    );

}