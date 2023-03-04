import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  const [myStyle, setMyStyle] = useState({
    color: '#042743',
    backgroundColor: 'white',
    buttonColor: 'light',
    outline: 'dark'
  });

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    showAlert(`${cls} mode has been enabled`, "success");
    
    if(cls === 'light') {
      setMyStyle ({
        color: 'black',
        backgroundColor: 'white',
        buttonColor: 'light',
        outline: 'dark'
      })
    }
    else if(cls === 'dark') {
      setMyStyle ({
        color: 'white',
        backgroundColor: '#343a40',
        buttonColor: 'dark',
        outline: 'light'
      })
    }
    else if(cls === 'warning') {
      setMyStyle ({
        color: 'black',
        backgroundColor: '#ffb300',
        buttonColor: 'warning',
        outline: 'dark'
      })
    }
    else if(cls === 'success') {
      setMyStyle ({
        color: 'black',
        backgroundColor: '#4caf50',
        buttonColor: 'success',
        outline: 'dark'
      })
    }
    else if(cls === 'danger') {
      setMyStyle ({
        color: 'black',
        backgroundColor: '#ef5350',
        buttonColor: 'danger',
        outline: 'dark'
      })
    }
    else{
      setMyStyle ({
        color: 'black',
        backgroundColor: '#2979ff',
        buttonColor: 'primary',
        outline: 'dark'
      })
    }
  }
  

  return (
    <>
    <Router> 
    <Navbar title="TextUtils" myStyle={myStyle} toggleMode={toggleMode} />    
    <hr style={{height:'3px',borderWidth:'0',color:'gray',backgroundColor:'gray'}}/>
    <Alert alert={alert}/>

    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About myStyle={myStyle} />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} myStyle={myStyle} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" />}/>
      </Routes>
    </div>

    </Router>
    </>
  );
}
      
export default App;