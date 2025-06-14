import React from 'react'

function card({myname,list}) {
  //console.log(props);  
  return (
    <>
     This is card
     <div>myname</div>
     <ul>
       {list.map(l => (
         <li key={l}>{l} </li>

        ))}
     </ul>
    </>
  )
}

export default card
