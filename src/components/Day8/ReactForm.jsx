
import React,{ useState } from 'react'

const ReactForm = () => {

    const [fullName, setFullName ] = useState({
        fName: "",
        lName : "",
        email : "",
        password : "",
    })


  

 

    function handleChange(event){
                //const newValue = event.target.value
                //const inputName= event.target.name 
               
                const {name,value} = event.target


setFullName( preValue => {
    return{
        ...preValue,
        [name] : value
    }
    
})
   
}
    
  
  
  
    //const [lName, setLName] = useState("")
    
    
   // function handlefirstname(event){
     //   setFName(event.target.value)
    //}

//function handlelastname(event){
  //     setLName(event.target.value)
   //}

   function handleSubmit(event){
               event.preventDefault()
   }
   
  return (
    <>
       <div className='w-[400px] h-[400]px mx-auto mt-20'>
           <h1 className='text-2xl'>Hello {fullName.fName} {fullName.lName}</h1>
            <p className ='text-sm'>{fullName.email}</p>
            
            <form onSubmit= {handleSubmit }>
                <label> First Name : </label>
            <input 
            name='fName'
            onChange={handleChange}
            type='text'
            placeholder='firstname'
            value={fullName.fName}
            className='p-4 bg-gray-100 text-center border border-black-200'
            style={{background : "white"}}
            />
            <br></br>
            <label>Last Name : </label>
            <input
            name='lName'
            onChange={handleChange}
            type='text'
            placeholder='lastname'
            value={fullName.lName}
            className='p-4 bg-gray-100 text-center border border-black-200'
            />
            <br></br>
            <label>E-mail : </label>
            <input 
            name='email'
            onChange={handleChange}
            type='email'
            placeholder='enter your email'
            value={fullName.email}
            className='p-4 bg-gray-100 text-center border border-black-200'
            style={{background : "white"}}
            />
            <br></br>
            <label>Password : </label>
            <input 
            name='password'
            onChange={handleChange}
            type='text'
            placeholder='password'
            value={fullName.password}
            className='p-4 bg-gray-100 text-center border border-black-200'
            style={{background : "white"}}
            />
            <br></br>
        
           <button
           type='submit'
           className='border border-gray-100 p-3 w-[150px] mt-3 text-gray-400 font-bold'
           style={{background : "white"}} >Submit </button>
           </form>

       </div>
    </>
  )
}

export default ReactForm
