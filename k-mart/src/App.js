import HomePage from './component/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
// import NavBar from './component/Navbar/NavBar';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/aboutus' element={<Aboutus/>}> </Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
