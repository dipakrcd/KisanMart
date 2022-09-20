import HomePage from './component/HomePage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
import NavBar from './component/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
        <Route exact path='/'><NavBar/><HomePage/> </Route>
        <Route exact path='/login'><Login/> </Route>
        <Route exact path='/register'><Register/> </Route>
        <Route exact path='/aboutus'><Aboutus/> </Route>
        <Route exact path='/contactus'><Contactus/> </Route>
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
