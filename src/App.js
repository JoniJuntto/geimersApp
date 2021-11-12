import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './Pages/Chats';
import Home from './Pages/Home';
import EditProf from './Pages/EditProf';
import CreateProfile from './Pages/CreateProfile'
import LoginOrSignup from './Pages/LoginOrSignup';
import LoggedOut from './Pages/LoggedOut';
import Profile from './Pages/Profile';
import CustomAlert from './components/CustomAlert';
import { GeimerContext } from './DataContext';

function App() {

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlerText] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <GeimerContext.Provider value={{alertOpen, setAlertOpen, alertText, setAlerText, alertSeverity, setAlertSeverity }}>
            <Route exact path="/" component={LoginOrSignup} />
            <Route path="/chat" component={Chats}/>
            <Route path="/home" component={Home}/>
            <Route path="/profile" component={EditProf}/>
            <Route path="/loggedout" component={LoggedOut} />
            <Route path="/create" component={CreateProfile} />
            <Route path="/ownProfile" component={Profile} />
          </GeimerContext.Provider>
        </Switch>
        <CustomAlert />
      </Router>
    </div>
  );
}

export default App;
