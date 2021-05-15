import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessagesBtn from "./components/MessagesBtn";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Friends from "./components/ListFriends/Friends";
import Images from "./components/Images/Images";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions";
import PrivateRoute from "./components/PrivateRoute";
import store from "./redux/store";
function App() {
  const pathName = window.location.pathname;
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        {pathName !== "/login" && <Navbar />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
          <Route path="/listFriends" component={Friends} />
          <Route path="/Images" component={Images} />
        </Switch>
        {pathName !== "/login" && pathName !== "/messages" && <MessagesBtn />}
      </StylesProvider>
    </Router>
  );
}

export default App;
