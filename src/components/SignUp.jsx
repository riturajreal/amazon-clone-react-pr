import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-grey-500 rounded-xl w-[500px] h-[fit] mx-auto  mt-[100px] bg-white'>
        <div className='flex flex-col p-5 gap-5 text-xl text-center'>
        <p className='font-semibold text-2xl'>Create a  <span className=' text-amazonclone'>New Account</span></p>
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="text" placeholder='Enter your name' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="email" placeholder='Enter your Email' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="password" placeholder='Enter your password' />
        <button className='p-5 bg-amazonclone-yellow rounded-lg text-white'>Sign Up</button>
        <Link to={"/log"}>
            <p>Already a User? Log in</p>
          </Link>
        </div>
    </div>
  )
}

export default SignUp;