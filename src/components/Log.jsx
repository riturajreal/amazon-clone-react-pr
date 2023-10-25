import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='bg-grey-500 rounded-xl w-[500px] h-[fit] mx-auto  mt-[100px] bg-white'>
        <div className='flex flex-col p-5 gap-5 text-xl text-center'>
        <p className='font-semibold text-2xl'>Log in to <span className=' text-amazonclone'>Renewed Goods</span></p>
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="text" placeholder='Enter your name' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="password" placeholder='Enter your password' />
        <p>Forget Password?</p>
        <button className='p-5 bg-amazonclone-yellow rounded-lg text-white'>Log in</button>
        <Link to={"/signup"}>
            <p>New here? Sign up</p>
          </Link>
        </div>
    </div>
  )
}

export default Auth;