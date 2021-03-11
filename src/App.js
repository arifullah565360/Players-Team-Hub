import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {

  return (
    <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/TeamDetails/:TeamId">
            <TeamDetails/>
          </Route>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
