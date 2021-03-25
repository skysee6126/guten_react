import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import { onLogOutClick } from "routes/Profile";
import Navigation from "components/Navigation";
import App from "./App";


const AppRouter = ({ isLoggendIn, userObj }) => {
    return (
        < Router >
            {isLoggendIn && <Navigation />}
            <Switch>
                {isLoggendIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile/">
                            <profile />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router >
    );
};

export default AppRouter;