import PreviousMap from 'postcss/lib/previous-map'
import React,{ useState } from 'react'

const ReactForm = () => {

    const [fullName, setFullName ] = useState({
        fName: "",
        lName : "",
        email : "",
        password : "",
    })


    function handleChange(event){
                const newValue = event.target.value
                const inputName= event.target.name 
               
                console.log(newValue)
                console.log(inputName)
            
setFullName( preValue => {
    if (inputName === 'fName'){
        return{
            fName : newValue,
            lName : preValue.lName
           
        }
    }else if (inputName === 'lName'){
        return{
            fName : preValue.fName,
            lName : newValue,
            email : preValue.email
        }
    }else if (inputName === 'email'){
        return{
            fName : preValue.fName,
            lName : preValue.lName,
            email : newValue,
            password : preValue.password
            
        }
    }else if (inputName === 'password'){
        return{
            fName : preValue.fName,
            lName : preValue.lName,
            email : preValue.email,
            password : newValue
        }
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
            <form onSubmit= {handleSubmit }>
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
            <input
            name='lName'
            onChange={handleChange}
            type='text'
            placeholder='lastname'
            value={fullName.lName}
            className='p-4 bg-gray-100 text-center border border-black-200'
            />
            <br></br>
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
