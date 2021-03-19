import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import App from "./App";


const AppRouter = (isLoggendIn) => {
    return (
        < Router >
            <Switch>
                {isLoggendIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>)}
            </Switch>
        </Router >: co
    );
};

export default AppRouter;