
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#065085';
      showalert("dark mode has been enabled","success")
      document.title='TextUtils- Dark mode';

      // setInterval(() => {
      //   document.title='TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);

    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success")
      document.title='TextUtils- light mode';
    }
  }
  return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes>   
          <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm showalert={showalert} heading= "Enter the text to analyse below" mode={mode}/>} />
        </Routes> */}
        <TextForm showalert={showalert} heading= "Enter the text to analyse below" mode={mode}/>
   {/* <About/> */}
   </div>
   {/* </Router> */}
    </>
   
  );
}

export default App;
