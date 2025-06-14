import React from 'react'
import Card from "./card"

function App() {
  let list = ["vikas", "ram", "Shyam"]
  return (
    <>
     <div>App</div>
     <Card myname="vikas" list={list}/>
    </>
    
  )
}

export default App
