import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import React, {useState} from 'react'


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
    type :type
    })

    setTimeout(()=>{setAlert(null)}, 3000)
  }

  const toogleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#293046';
      showAlert('You have enable Darkmode', 'success');
      document.getElementsByTagName('nav')[0].classList.toggle('aqua');
      document.getElementsByClassName('active')[0].style.setProperty("color", "#0037ff", "important");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('You have enable Lightmode', 'success')
      document.getElementsByTagName('nav')[0].classList.toggle('aqua')
      document.getElementsByClassName('active')[0].style.setProperty("color", "white", "important");
    }
  }


  return (
    <> 
    <Navbar  mode={mode} toogleMode={toogleMode}/>
    <Alert alert={alert} />
    <div className="container my-5"> 
      <Text mode={mode} showAlert={showAlert} />
    </div>
    {/* <div className='container my-5'>
      <About />
      </div> */}

    </>
  );
}

export default App;
