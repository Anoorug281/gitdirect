import React, { useState } from 'react'




const State = () => {
        const [time,setTime] = useState(new Date().toLocaleTimeString())
        


    function showtime (){
        setTime( new Date().toLocaleTimeString())
       
        
    }
    setTimeout(showtime,1000)
        
    
 return (
    <>
     <div className='w-[400px] h-[400]px mx-auto mt-56'>
            <h1>Time:{time}</h1>
            <button onClick={showtime} className='text-5xl border border-gray-400'>Get time</button>
      </div>
      
  </>
  )
}

export default State
