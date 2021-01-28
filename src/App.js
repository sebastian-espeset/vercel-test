import React,{ useState } from 'react';
import './App.css';
import ButtonTest from './ButtonTest';



function App() {
  const [alert, setAlert]= useState(false)
    const handleWarningClick=(e)=>{
        e.preventDefault();
        setAlert(!alert);
    }
  if(alert===true){
    return(
      <main>
        <h1>I asked you not to click that...</h1>
        <button onClick={handleWarningClick}>Please do not click THIS button...</button>
      </main>
    )
  }
  
  return (
    <main>
      <h1>This is my site</h1>
      <ButtonTest handleWarningClick={handleWarningClick} alert={alert}/>
    </main>
  );
}

export default App;
