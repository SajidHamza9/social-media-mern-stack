import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessagesBtn from "./components/MessagesBtn";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";
function App() {
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
        </Switch>
        <MessagesBtn />
      </StylesProvider>
    </Router>
  );
}

export default App;
