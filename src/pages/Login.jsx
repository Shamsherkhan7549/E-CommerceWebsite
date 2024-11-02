import React, { useState } from 'react'

const Login = () => {
  const [currState, setCurrState] = useState('Login')

  const submitHandler = (event) => {
      event.preventDefault();
  }
  return (
    
      <form onSubmit={submitHandler} className=' flex flex-col items-center gap-7 mt-20 '>
       
       <div className='flex gap-1 items-center'>
          <p className='prata-regular text-semibold text-3xl'>{currState}</p>
          <p className='h-[2px] w-10  bg-gray-700 '></p>
       </div>

        
        <div className='flex flex-col gap-5 w-full max-w-md'>
          {currState === "Sign Up" ? 
            <input type="text" placeholder='Name'  className='border border-black px-3 py-2 w-full text-sm ' required/> : ""
          }
            <input type="email" placeholder='Email'  className='border border-black px-3 py-2 w-full text-sm ' required/>
            <input type="password" placeholder='Password' className='border border-black px-3 py-2 w-full text-sm ' required/>

            <div className='flex justify-between text-sm text-gray-600 w-full'>
            <p className='cursor-pointer'>Forgot your password?</p>
            {
              currState === 'Sign Up' ? 
              <p className='cursor-pointer' onClick={() => setCurrState("Login")}>Login account</p>
              :
              <p className='cursor-pointer' onClick={() => setCurrState("Sign Up")}>Create account</p>
            }
            </div>  
        </div>

        <button type='btn' className='bg-black text-white px-6 py-2 text-sm'>{currState ==='Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
   
  )
}

export default Login