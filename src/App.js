import './App.css';
import Card from './component/Card';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';
import Valorant from './Valorant.json';
import { useState } from 'react';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert(' Dark Mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
      showAlert(' Light Mode has been enabled', 'success')
     }
  }

  return (
    <div style={{ backgroundColor: mode === 'light' ? '#FFFFFF' : '#0c0c0c' }}>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        
        <h1 style={{textAlign:"center", marginBottom: "20px" ,textDecoration:"underline" , color:"grey"}}>Valorant Maps</h1>
        <Carousel/>
        <h1 style={{textAlign:"center", marginTop: "20px" , textDecoration:"underline" ,color:"grey" }}>Valorant Agents</h1>
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          {Valorant.List.map((value) => {
            return (
              <div className="col-md-3" style={{margin: "10px"}}>
                <Card agent={value.Agent} text={value.Biography} type={value.Type} image={value.Image} mode={mode}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
