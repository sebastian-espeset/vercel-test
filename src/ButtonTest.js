import React, { useState } from 'react'

export default function ButtonTest() {
    const [alert, setAlert]= useState(false)
    const handleWarningClick=(e)=>{
        e.preventDefault();
        setAlert(!alert);
    }
    console.log("button test")
    if(alert===true){
        return(
            <>
        <h1>I asked you not to click that</h1>
        <button onClick={handleWarningClick}>Please do not click THIS button...</button>
        </>
        )
    }
    return (
        <div>
            <button onClick={handleWarningClick}>Do not click this button</button>
        </div>
    )
}

