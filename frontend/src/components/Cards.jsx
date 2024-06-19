import React from 'react'

export const Cards = ({item}) => {
    // console.log(item);
  return (
   <>
   <div className='mt-4 my-3 py-3'>
   <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white ">Buynow</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}
