import React from 'react'
import { Link } from 'react-router-dom'

const AdminAuth = () => {
  return (
    <div className='bg-grey-500 rounded-xl w-[500px] h-[fit] mx-auto  mt-[100px] mb-[50px] bg-white'>
        <div className='flex flex-col p-5 gap-5 text-xl text-center'>
        <p className='font-semibold text-2xl'>Become a  <span className=' text-amazonclone'>Seller</span></p>
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="text" placeholder='Enter your name' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="email" placeholder='Enter your Email' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="password" placeholder='Enter your password' />
        <input className='p-5 bg-[#f0f5ff] rounded-lg' type="text" placeholder='Enter GST Number' />
        <p className='text-right text-amazonclone underline'>Validate GST Number</p>
        <button className='p-5 bg-amazonclone-yellow rounded-lg text-white'>Finish</button>
        </div>
    </div>
  )
}

export default AdminAuth;