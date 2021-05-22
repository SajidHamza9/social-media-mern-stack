import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MessagesBtn from "./components/MessagesBtn";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";
import PhotosScreen from "./pages/PhotosScreen";
import FriendsScreen from "./pages/FriendsScreen";
import Friends from "./components/ListFriends/Friends";
import Images from "./components/Images/Images";
import { useEffect } from "react";
import utils from "./utils/socket";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

import { loadUser, logout } from "./redux/actions/authActions";


function App() {
  const pathName = window.location.pathname;
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
 
  useEffect(() => {
      dispatch(loadUser());
      console.log("faa");
      if (utils.user) {
        utils.socket.emit("identity", utils.user);
        console.log(utils);
      }
  }, []);
  return (
          <Router>
            <StylesProvider injectFirst>
              <GlobalStyle />
              {pathName !== "/login" && <Navbar />}
              <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                {/* <Route path="/profile" component={Profile} /> */}
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/messages" component={Messages} />
                <Route path="/photos" component={PhotosScreen} />
                <Route path="/friends" component={FriendsScreen} />
                <Route path="/listFriends" component={Friends} />
                <Route path="/Images" component={Images} /> */}

                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute exact component={Profile} path="/profile" />
                <PrivateRoute exact component={Messages} path="/messages" />
                <PrivateRoute exact component={PhotosScreen} path="/photos" />
                <PrivateRoute exact component={Friends} path="/listFriends" />
                <PrivateRoute exact component={Images} path="/Images" />
                <Route exact path="/login">
                   {isAuth ? <Redirect to="/" /> : <Login />} 
                </Route>
             
              </Switch>
              {pathName !== "/login" && pathName !== "/messages" && <MessagesBtn />}
            </StylesProvider>
          </Router>
  );
}

export default App;
