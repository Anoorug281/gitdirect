import React from "react"
import Card from "./components/Card"
import contactFile from "./components/Contact"
import Avatar from "./components/Avatar"

function App() {
 
  function createCard(item){
    return(
      <Card
       key ={item.id}
       name = {item.name}
       image = {item.imgUrl}
       phone ={item.phone}
       email ={item.email}

       />

    )
  }

  return (
    <>
     <h1 className="heading">My contacts</h1>
   {
    contactFile.map (createCard)
   }
  
    </>
  )
}

export default App
