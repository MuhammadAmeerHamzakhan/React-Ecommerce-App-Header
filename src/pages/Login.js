import React, { useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>

            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons'/>
                    </div>
            

            <form>
            <div className='grid'>
                <label>Email : </label>
                <div className='bg-slate-100 p-2'>
                <input type='email' placeholder='Enter Email' className='w-full h-full outline-none bg-transparent'/>
                </div>
            </div>

            <div className='grid'>
                <label>Password : </label>
                <div className='bg-slate-100 p-2 flex'>
                <input type={showPassword ? "text" : "password"} placeholder='Enter Password' className='w-full h-full outline-none bg-transparent'/>
                <div className='cursor-pointer text xl' onClick={()=>setShowPassword((preve)=>!preve)}>
            <span>
                 {
                     showPassword ? (
                            <FaEyeSlash/>
                     )
                     :
                     (
                            <FaEye/>
                     )
                 }
            </span>
                 </div>
                </div>
                <Link to={'forgot-password'} className='block w-fit ml-auto hover underline text-red-600'>Forgot password ?</Link>


            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

            </form>
        

            </div>

        </div>
    </section>

)
}
export default Login