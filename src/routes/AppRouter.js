import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import Page from "../components/Page";

import styles from "./AppRouter.module.scss";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
