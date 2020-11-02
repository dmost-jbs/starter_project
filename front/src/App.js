import './App.css';
import Interface from './main_display/user_interface.js';
import Login from './login/login.js';
import Register from './register/register';
import NavigationBar from './navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
        <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
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
