import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>} 
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>password</span>
        <br />
        <input type="password" placeholder='Enter your password' className='w-80 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700'>Login</button>
        <p>Not registered?
            <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}


export default Login