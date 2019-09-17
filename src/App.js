import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Home from './views/Home'
import Search from './views/Search'
import SearchDetails from './views/SearchDetails'
import MusicPlaying from "./views/MusicPlaying";
class App extends React.Component{
  render(){
      return (
          <>
                <Router>
                    <Switch>
                        <Route path={"/musicplaying"} component={MusicPlaying}></Route>
                        <Route path={"/Search"} component={Search}></Route>
                        <Route path={"/SearchDetails"} component={SearchDetails}></Route>
                        <Route path={"/"} component={Home}></Route>
                    </Switch>
                </Router>
          </>
      );
  }
}

export default App;
