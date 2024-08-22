import React from "react"
import Contact from "./components/Contact"

function App() {
 

  return (
    <>
     <h1 className="text-3xl text-bold mt-3 mb-3  text-center">My contacts</h1>
     <Contact 
     name="Beyonce" 
     imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
     phone="+123 456 789" 
     email="b@beyonce.com"/>

     <Contact 
     name="Jack Bauer"
     imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
     phone="+987 654 321"
     email="jack@nowhere.com" 
     />

     <Contact 
     name="Chuck Norris"
     imgUrl="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
     phone="+918 372 574"
     email="gmail@chucknorris.com"
     />
     
    </>
  )
}

export default App
