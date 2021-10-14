import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from '../Error/Error';
import Login from '../form/LogIn/Login';
import Signup from '../form/Signup/Signup';
import Header from '../Home/Header/Header';
import Home from '../Home/Home/Home';

const Routing = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routing;