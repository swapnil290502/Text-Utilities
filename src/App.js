import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  // const [mode,setMode] = useState('dark');

  const [text, setText] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null);

  const [color, setColor] = useState('white');

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode = (message) => {
    console.log(message);
    
    setText('Enable dark Mode');
    if (message === 'blue') {
      document.body.style.backgroundColor = '#042743';
      setColor('#042743');
      showAlert("Blue Dark Mode has been enabled", "success");
      document.title = "TextUtils - Blue Mode";
    }
    if (message === 'green') {
      document.body.style.backgroundColor = '#114304';
      setColor('#114304');
      showAlert("Green Dark Mode has been enabled", "success");
      document.title = "TextUtils - Green Mode";
    }
    if (message === 'red') {
      document.body.style.backgroundColor = '#430414';
      setColor('#430414');
      showAlert("Red Dark Mode has been enabled", "success");
      document.title = "TextUtils - Red Mode";
    }
    if (message === 'white') {
      document.body.style.backgroundColor = 'white';
      setColor('white');
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    if (message === 'black') {
      document.body.style.backgroundColor = 'black';
      setColor('black');
      setText('Enable light Mode');
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }


    // if(mode === 'light'){
    //   setMode('dark');
    //   // document.body.style.backgroundColor = '#042743';
    //   setText('Enable light Mode');
    //   showAlert("Dark Mode has been enabled", "success");
    // }
    // else{
    //   setMode('light');
    //   // document.body.style.backgroundColor = 'white';
    //   setText('Enable dark Mode');
    //   showAlert("Light Mode has been enabled", "success");
    // }
  }
  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils"  toggleMode={toggleMode} text={text} /> 
      <Alert alert={alert} />
      <div className="container my-3"> 
      <TextForm showAlert={showAlert} heading="Enter the text"  color={color} />
      </div>
      {/* <div className="container my-3"> 
          <Switch>
            <Route exact path="/about">
              <About color={color} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text"  color={color} />
            </Route>
          </Switch>
      </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
