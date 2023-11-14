import React, { useState } from 'react';
import './App.css';
import Navbar  from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';


import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  
const showAlert=(message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() =>{
    setAlert(null)
  },1700)
}

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743' 
      showAlert("Dark mode has been enable", "success")
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enable", "success")
      document.title="TextUtils - Light Mode"
    }
  }
  return (
   <>
   <BrowserRouter>
   <Navbar Link="About us" mode={mode} toggleMode={toggleMode} ></Navbar>

   <Alert alert={alert} />

   

<div className="container mb-3">
<Routes>

  <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter text here to analyze" mode={mode} />} ></Route>
  <Route exact path='/about' element={<About />} ></Route>
</Routes>
</div>
</BrowserRouter>

   </>
  );
}

export default App;
