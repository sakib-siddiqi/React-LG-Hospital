import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import useAuth from "./Hooks/useAuth";
import useFirebase from "./Hooks/useFirebase";
import NotFound from "./Pages/404/NotFound";
import About from "./Pages/About/About";
import Covid from "./Pages/COVID/Covid";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import OrderDone from "./Pages/Services/OrderDone";
import Services from "./Pages/Services/Services";
import ServiceSingle from "./Pages/Services/ServiceSingle";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import PrivateRoute from "./Shared/PrivateRoute";
function App() {
  const { user } = useFirebase();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <PrivateRoute path="/services/:findTitle">
            <ServiceSingle />
          </PrivateRoute>
          <PrivateRoute path="/success">
            <OrderDone />
          </PrivateRoute>
          <Route path="/login">
            {!user.uid ? <Login /> : <Redirect to="/profile" />}
          </Route>
          <Route path="/signup">
            {!user.uid ? <Signup /> : <Redirect to="/profile" />}
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/about" component={About} />
          <Route path="/covid19" component={Covid} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
