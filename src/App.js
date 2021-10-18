import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import OrderDone from "./Pages/Services/OrderDone";
import Services from "./Pages/Services/Services";
import ServiceSingle from "./Pages/Services/ServiceSingle";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route path="/services/:findTitle" component={ServiceSingle} />
        <Route path="/success" component={OrderDone} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
