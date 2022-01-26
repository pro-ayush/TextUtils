import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [AlertVar, setAlertVar] = useState(null);


  const showAlert = (type, msg) => {
    setAlertVar({
      type:type, 
      display:msg
    })
  }

  let [defaultColorScheme, setDefaultColorScheme] = useState({
    color:'black',
    backgroundColor:'white'
  })

  const toggleMode = ()=> {

    console.log("func called for dark mode")

    if (mode === 'light'){
      //changing value for navbar
      setMode('dark')
      //changing value for text form
      setDefaultColorScheme({
        color:'white',
        backgroundColor:'grey'
      })
      //changing background color
      document.body.style.backgroundColor = '#343a40'
    }else{
      setMode('light')
      setDefaultColorScheme({
        color:'black',
        backgroundColor:'white'
      })
      //changing background color
      document.body.style.backgroundColor = '#e9ecef'
    }
  }



  return (
    
    <div className="App">
      <Navbar title={"TextUtils"} mode={mode} toggle={toggleMode} />
      <Alert data={AlertVar} />
      <TextArea title={"Enter your Text here"} alertFunc={showAlert} mode={mode} bgColor={defaultColorScheme.backgroundColor} txtColor={defaultColorScheme.color}/>
    </div>
  );
}

export default App;
