import React from 'react'

export default function ButtonTest({handleWarningClick, alert}) {
    return (
        <>
            <button onClick={handleWarningClick}>Do not click this button</button>
        </>
    )
}

