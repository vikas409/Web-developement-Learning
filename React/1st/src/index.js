import React from "react"
import ReactDOM from 'react-dom/client'

function AppOne () {
    return(
        <div>AppOne</div>
    )


}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AppOne />
        
    </React.StrictMode>
)

