import React from 'react'
import Login from './Login';

const Home = () => {

var isLoggedIn = false;


//function renderContent(){


//if(isLoggedIn === true){
  //  return <h1>hello</h1>
//}else{
  //  content = <login />

//}
}



  return (
   <>
   {isLoggedIn ? <h1>hello</h1>  : <login />}
   </> 
  )
}

export default Home
