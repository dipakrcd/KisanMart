import './App.css';
import "@stripe/stripe-js";
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
          <HomePage/>
        </Route>    
        <Route exact path='/aboutus'>
          <Navbar/>
          <Aboutus/>
        </Route>
        <Route exact path='/contactus'>
          <Navbar/>
          <Contactus/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
