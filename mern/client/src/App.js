import './App.css';
import { Route } from "react-router-dom";
import logIn from './pages/Login';
import chat from './pages/Chat';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <div className="App">
      <Route path = "/" component={Home} exact/>
      <Route path = "/chat" component={chat}/>
      <Route path = "/logIn" component={logIn}/>
      <Route path = "/ProfilePage" component={ProfilePage}/>
      
    </div>
  );
}

export default App;
