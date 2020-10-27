import logo from './logo.svg';
import './App.css';
import Interface from './main_display/user_interface.js';
import NavigationBar from './main_display/navbar';
function App() {
  return (
    <div className="App">
      
      <NavigationBar/>
      <Interface/>
	  
    </div>
  );
}

export default App;
