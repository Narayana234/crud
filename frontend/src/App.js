
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';

import Login from "./components/Login";

import SignUp from './components/SignUp';

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/" element = {<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    );
}

export default App;
