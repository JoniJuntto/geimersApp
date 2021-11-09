import './App.css';
import TrendingGames from './TrendingGames';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './Chats';
import Home from './Home';
import EditProf from './EditProf';
import Settings from './Settings';
import MatchPage from './MatchPage';
import CreateProfile from './CreateProfile'
import LoginOrSignup from './LoginOrSignup';
import LoggedOut from './LoggedOut';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginOrSignup} />
          <Route path="/trending" component={TrendingGames}/>
          <Route path="/chat" component={Chats}/>
          <Route path="/home" component={Home}/>
          <Route path="/profile" component={EditProf}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/match" component={MatchPage}  />
          <Route path="/loggedout" component={LoggedOut} />
          <Route path="/create" component={CreateProfile} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
