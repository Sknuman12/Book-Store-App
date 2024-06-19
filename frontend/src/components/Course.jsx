// eslint-disable-next-line no-unused-vars
import React from 'react'
import list from '../../public/list.json'
import { Cards } from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you {""} <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid impedit at voluptate illo ab adipisci omnis reiciendis odit facere corrupti? Similique iure ad fugit quia velit vero laborum earum sit. Molestiae quia nam harum, voluptate veritatis modi, ipsa quaerat impedit placeat quisquam soluta. Magni cum doloremque eos nobis adipisci deleniti?</p>
           <Link to={"/"}>
           <button className='bg-pink-500 px-4 py-2 rounded-md mt-4 hover:bg-pink-700 duration-300 hover:text-white'>back</button>
           </Link>

        </div>
        <div className='mt-12 grid grid-col-1 md:grid-cols-3'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))} 
        </div>
    </div>
    </>
  )
}

export default Course