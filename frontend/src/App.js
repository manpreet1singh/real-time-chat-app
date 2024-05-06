
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Messenger from './components/Messenger';
import ProtectRoute from './components/ProtectRoute';
import Main from './components/Social/Main/Main';
import Socialhome from './components/Social/Socialhome';

function App() {
  return (
        <Router>
            <Switch>
            <Route path='/' component={Socialhome} exact></Route>
                <Route path='/messenger/login' component={Login} exact></Route>
                <Route path='/messenger/register' component={Register} exact></Route>
                <ProtectRoute path='/messenger' component={Messenger} exact />
            </Switch>
        </Router>
  );
}

export default App;

