import React from "react"
import Card from "./components/Card"
import contactFile from "./components/Contact"
import Avatar from "./components/Avatar"

function App() {
 

  return (
    <>
     <h1 className="heading">My contacts</h1>
     <Avatar imgUrl="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg" />
<Card
name= {contactFile[0].name} 
imgUrl={contactFile[0].imgUrl}
phone={contactFile[0].phone}
email={contactFile[0].email}
/>

<Card 
name= {contactFile[1].name} 
imgUrl={contactFile[1].imgUrl}
phone={contactFile[1].phone}
email={contactFile[1].email}
/>

<Card
name= {contactFile[2].name} 
imgUrl={contactFile[2].imgUrl}
phone={contactFile[2].phone}
email={contactFile[2].email}
/>

  
    </>
  )
}

export default App
