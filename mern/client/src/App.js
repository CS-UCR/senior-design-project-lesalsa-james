import './App.css';
import { Route } from "react-router-dom";
import home from './pages/Home';
import chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <Route path = "/" component={home} exact/>
      <Route path = "/chat" component={chat}/>
      
    </div>
  );
}

export default App;
