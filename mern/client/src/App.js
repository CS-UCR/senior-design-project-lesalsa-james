import './App.css';
import { Route } from "react-router-dom";
import LogIn from './pages/Login';
import chat from './pages/Chat';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage'
import FilterPage from './pages/FilterPage'

function App() {
  return (
    <div className="App">
      <Route path = "/" component={Home} exact/>
      <Route path = "/chat" component={chat}/>
      <Route path = "/logIn" component={LogIn}/>
      <Route path = "/ProfilePage" component={ProfilePage}/>
      <Route path = "/FilterPage" component={FilterPage}/>
      
    </div>
  );
}

export default App;
