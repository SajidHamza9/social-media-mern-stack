import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessagesBtn from './components/MessagesBtn';
import GlobalStyle from './styles/globalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/login/Login';
import Messages from './pages/messages/Messages';
import PhotosScreen from './pages/PhotosScreen';
import FriendsScreen from './pages/FriendsScreen';
import Friends from './components/ListFriends/Friends';
import Images from './components/Images/Images';
import { useEffect } from 'react';
import utils from './utils/socket';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import PostModal from './components/PostModal';

function App() {
  const pathName = window.location.pathname;
  const { user } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (utils.user) {
      utils.socket.emit('identity', utils.user);
      utils.socket.on(user._id.toString(), (data) => {
        enqueueSnackbar(data.notification.type);
      });
    }
  }, []);
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        {pathName !== '/login' && <Navbar />}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/messages' component={Messages} />
          <Route path='/photos' component={PhotosScreen} />
          <Route path='/friends' component={FriendsScreen} />
          <Route path='/listFriends' component={Friends} />
          <Route path='/Images' component={Images} />
        </Switch>
        {pathName !== '/login' && pathName !== '/messages' && <MessagesBtn />}
        <PostModal />
      </StylesProvider>
    </Router>
  );
}

export default App;
