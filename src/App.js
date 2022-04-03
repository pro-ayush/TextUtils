import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {


  // States for Colors 
  const [mode, setMode] = useState('light');
  const [AlertVar, setAlertVar] = useState(null);


  //SHOW ALERT 
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


  // /*Function for Changing colors of background and front 
  const toggleMode = (event)=> {
    
    //statement for dark mode
    if (mode === 'light' && event.target.innerHTML === ''){
      //changing value for navbar
      setMode('dark')
      //changing value for text form
      setDefaultColorScheme({
        color:'white',
        backgroundColor:'grey'
      })
      //changing background color
      document.body.style.backgroundColor = '#343a40';
    } 

    //Condiition for changing the colors depending on button
    else if ((mode === ('light') || (mode === ('dark'))) && (event.target.innerHTML !== '')) {

      //taking the input as innerhtml
      let btnColor = event.target.value
      console.log(btnColor)
      //Switch statement for multiple dark modes
      setMode('dark')
      switch (btnColor) {

        case ('primary') : {
          setDefaultColorScheme({
            color : '#f2fce6',
            backgroundColor : '#09374f'
          })
          document.body.style.backgroundColor = '#052554'
          break;
        }

        case ('danger'): {
          setDefaultColorScheme({
            color : '#f2fce6',
            backgroundColor : '#632f2f'
          })
          document.body.style.backgroundColor = '#690d0d'
          break;
        }
        case ('success'): {
          setDefaultColorScheme({
            color : '#dee3df',
            backgroundColor : '#374a39'
          })
          document.body.style.backgroundColor = '#04300a'
          break;
        }
        case ('warning'): {
          setDefaultColorScheme({
            color : '#f2fce6',
            backgroundColor : '#818a3b'
          })
          document.body.style.backgroundColor = '#646e0f'
          break;
        }

        default : {
          console.log('do nothing ')
          break;
          //leaving it empty so it doesn't do anything
        }
      }
    }

    //Statement for light mode
    else if (mode === 'dark' && event.target.innerHTML === ''){
      setMode('light')
      setDefaultColorScheme({
        color:'black',
        backgroundColor:'white'
      })
      //changing background color
      document.body.style.backgroundColor = '#e9ecef'
    }
    else {
      //do nothing 
    }
  }

  



  //Returning the Main App Componenet
  return (
    
    <div className="App">
      <Navbar title={"TextUtils"} mode={mode} toggle={toggleMode} />
      <Alert data={AlertVar} />
      <TextArea title={"Enter your Text here"} alertFunc={showAlert} mode={mode} bgColor={defaultColorScheme.backgroundColor} txtColor={defaultColorScheme.color}/>
    </div>
  );
}

export default App;
