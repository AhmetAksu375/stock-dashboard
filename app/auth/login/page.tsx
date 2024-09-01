"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { handleLoginRequest } from '../../../api/Auth/login';
import { toast } from 'react-toastify';

export default function page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = ()=>{
        if(username.length == 0 || password.length == 0 ){
            toast.warning("Fill the all blanks !", {autoClose:1000, theme: "light",})
        }
        handleLoginRequest({username:username, password: password})
    }

  return (
  <div className='flex justify-center'>
      <div className='flex flex-col justify-center w-[400px] py-32 gap-4'>
        <h3 className="text-left pl-2 font-bold text-4xl  pb-4">Login</h3>
     
     <label className="input input-bordered flex items-center gap-2">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 16 16"
         fill="currentColor"
         className="h-4 w-4 opacity-70">
         <path
           d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
       </svg>
       <input  onChange={(e)=> setUsername(e.target.value)} type="text" className="grow" placeholder="Username" value={username}/>
     </label>
     <label className="input input-bordered flex items-center gap-2">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 16 16"
         fill="currentColor"
         className="h-4 w-4 opacity-70">
         <path
           fillRule="evenodd"
           d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
           clipRule="evenodd" />
       </svg>
       <input placeholder='Password' onChange={(e)=> setPassword(e.target.value)} type="password" className="grow" value={password} />
     </label>
     <Button onClick={handleLogin}>Login</Button>

         </div>

  </div>
  )
}
