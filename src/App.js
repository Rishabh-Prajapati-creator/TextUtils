import Navbar  from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';
import React,{useState} from 'react';
import './App.css';

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
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
}

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743' 
      showAlert("Dark mode has been enable", "success")
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enable", "success")
     
    }
  }
  return (
   <>
   <BrowserRouter>
   <Navbar Link="About us" mode={mode} toggleMode={toggleMode} ></Navbar>

   <Alert alert={alert} />

   

<div className="container mb-3">
<Routes>

  <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Rmove extra spaces" mode={mode} />} ></Route>
  <Route exact path='/about' element={<About mode={mode} />} ></Route>
</Routes>
</div>
</BrowserRouter>

   </>
  );
}

export default App;
