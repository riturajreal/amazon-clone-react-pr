import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='bg-amazonclone-yellow max-w-[800px] flex justify-evenly place-items-center p-10 gap-5  rounded-xl h-[fit] mx-auto  mt-[100px]'>
        <div className=' max-w-[400px] flex  flex-col gap-3 text-xl text-white' >
        <h3 className='text-sm'>Embark on a journey through our extensive selection of high-quality products, with the added peace of mind that all items are guaranteed to be in pristine, like-new condition.</h3>
        <p className='font-semibold text-2xl'> With Assurance of <span className=' text-amazonclone'> Renewed Goods</span></p>
        </div>
        <div className='align place-content-center'>
        <button className='p-5 bg-amazonclone rounded-lg text-white'>Explore Renewed Goods </button>
        </div>

    </div>
  )
}

export default Cta;