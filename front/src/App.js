import './App.css';
import Interface from './main_display/user_interface.js';
import Login from './login/login.js';
import AccountInfo from './account_info/accountInfo'
import NavigationBar from './navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <AccountInfo />
          </Route>
          <Route path="/">
            <Interface />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
