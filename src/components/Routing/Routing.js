import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AllFoods from '../AllFoods/AllFoods';
import Error from '../Error/Error';
import FoodDetails from '../FoodDetails/FoodDetails';
import Footer from '../Footer/Footer';
import Login from '../form/LogIn/Login';
import Signup from '../form/Signup/Signup';
import CartItem from '../Home/CartItem/CartItem';
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
                    <PrivateRoute path="/foodDetails/:foodId">
                        <FoodDetails></FoodDetails>
                    </PrivateRoute>
                    <PrivateRoute path="/allFoods">
                        <AllFoods></AllFoods>
                    </PrivateRoute>
                    <PrivateRoute path="/cartitem">
                        <CartItem></CartItem>
                    </PrivateRoute>
                    <Route path="*">
                        <Error/>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
};

export default Routing;