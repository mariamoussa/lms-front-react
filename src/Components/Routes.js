import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Create_Admin from '../Pages/Admin_Panel/Manage_Admin/Create_Admin';
import List_Admin from '../Pages/Admin_Panel/Manage_Admin/List_Admin';
import Edit_Admin from '../Pages/Admin_Panel/Manage_Admin/Edit_Admin';
import Create_Student from '../Pages/Admin_Panel/Manage_Student/Create_Student';
import List_Student from '../Pages/Admin_Panel/Manage_Student/List_Student';
import Edit_Student from '../Pages/Admin_Panel/Manage_Student/Edit_Student';
import Create_Section from '../Pages/Admin_Panel/Manage_Section/Create_Section';
import List_Section from '../Pages/Admin_Panel/Manage_Section/List_Section';
import Edit_Section from '../Pages/Admin_Panel/Manage_Section/Edit_Section';




export default function Routes() {

    return (
        <Switch>
            {/* admin routes */}
            <Route exact path='/admin/create' component={Create_Admin} />
            <Route exact path='/admin/list' component={List_Admin} />
            <Route exact path='/admin/edit/:id' component={Edit_Admin} />

            {/* Student routes */}
            <Route exact path='/student/create' component={Create_Student} />
            <Route exact path='/student/list' component={List_Student} />
            <Route exact path='/student/edit/:id' component={Edit_Student} />

            <Route exact path='/section/create' component={Create_Section} />
            <Route exact path='/section/list' component={List_Section} />
            <Route exact path='/section/edit/:id' component={Edit_Section} />



        </Switch>
    );

}