import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessagesBtn from './components/MessagesBtn';
import GlobalStyle from './styles/globalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <MessagesBtn />
      </StylesProvider>
    </Router>
  );
}

export default App;
