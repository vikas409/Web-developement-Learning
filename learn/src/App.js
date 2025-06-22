import React, { useState } from 'react'
import Card from "./card"
import Axios from 'axios'


function App() {

  const [details , setDetails] = useState({})
  const fetechDetails = async() =>{
    const {data}= await Axios.get('https://randomuser.me/api')
    console.log("RESPONSE",data);
    const details = data.results[0] 
    setDetails(details)

  }
  let list = ["vikas", "ram", "Shyam"]
  return (
    <>
     <div>App</div>
     <Card myname="vikas" list={list} details={details}/>
     <button onClick={fetechDetails}>
      get details
     </button>
    </>
    
  )
}

export default App
