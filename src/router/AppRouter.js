import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import { startChecking } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h3>Plis espera...</h3>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            isAuthenticated={!!uid}
            component={LoginScreen}
          />
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={!!uid}
            component={CalendarScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
