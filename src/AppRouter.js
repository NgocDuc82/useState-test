import React from 'react';
import { BrowserRouter as Router ,Link , Route , Switch } from 'react-router-dom';

export default function AppRouter() {
    return {
        <Router>
            <Switch>
                <Route path="/admin" >
                    </Admin>
                </Route>
                <Router path="/">
                    <Login/>
                </Router>
            </Switch>
        </Router>

    }

    function Admin() {
        return (
        <div>
            Admin
        </div>
        )
    }
}