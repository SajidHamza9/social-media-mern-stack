import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessagesBtn from "./components/MessagesBtn";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";

import { Provider } from 'react-redux';
import store from './redux/store';

import { useEffect } from 'react';
import { loadUser } from './redux/actions/authActions';
import PrivateRoute from './components/PrivateRoute';
function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
          <Route path="/listFriends" component={Friends} />
          <Route path="/Images" component={Images} />

        </Switch>
        <MessagesBtn />
      </StylesProvider>
    </Router>
  );
}

export default App;
