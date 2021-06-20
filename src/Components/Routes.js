import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Create_Admin from '../Pages/Admin_Panel/Manage_Admin/Create_Admin';

export default function Routes() {

    return (
        <Switch>
            <Route path='/admin/create' component={Create_Admin} />
        </Switch>
    );

}