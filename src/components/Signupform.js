import React from 'react'
import {useState} from "react"
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Signupform = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""
    });

    const[showPassword,setShowPassword] = useState(false);
    const[showConfirmPassword,setconfirmShowPassword] = useState(false);
    const[accountType,setAccountType] = useState("student");

    function changeHandler(event){
        setFormData((prevData) =>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmpassword){
            toast.error("Password do not Match");
            return;
        }

        const Userdata = {
            ...formData
        }

        const accountData = {
            ...Userdata,
            accountType
        }

        console.log("printing user Data");
        console.log(accountData);

        setIsLoggedIn(true);
        toast.success("Account Created Successfully");
        navigate("/dashboard");
    }

  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max  border-b-2 border-richblack-100' >
            <button className={`${accountType=== "student" ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={ ()=> setAccountType("student") }
            >Student</button>
            <button  className={`${accountType=== "instructor" ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={ ()=> setAccountType("instructor") } 
            >Instructor</button>
        </div>

        <form onSubmit={submitHandler} >
        {/* firstname & lastname */}
          <div className='flex gap-x-4 mt-[20px]' >
          <label className='w-full' >
            <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                First Name<sup className='text-pink-200 '>*</sup>
            </p>

            <input required
            type="text"
            name="firstName" value={FormData.firstName}
            onChange={changeHandler}
            placeholder="Enter first Name "
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100 '
            />

          </label>

          <label className='w-full'>
            <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Last Name<sup className='text-pink-200 '>*</sup>
            </p>

            <input required
            type="text"
            name="lastName" value={FormData.lastName}
            onChange={changeHandler}
            placeholder="Enter last Name "
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100 '
            />

          </label>

          </div>

          {/* email */}
          <div className=' mt-[20px]'>
                <label className='w-full' >
                    <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                        Email Address<sup className='text-pink-200 '>*</sup>
                    </p>

                    <input required
                    type="email"
                    name="email" value={FormData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email "
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100 '
                    />

                </label>
          </div>

          {/* Confirm pass and password */}

          <div className='flex gap-x-4  mt-[20px]' >
                <label className='relative w-full ' >
                    <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                        Create Password<sup className='text-pink-200 '>*</sup>
                    </p>

                    <input required
                    type={showPassword ? ("text") : ("password")}
                    name="password" value={FormData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password "
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100 '
                    />

                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ ()=> setShowPassword( (prev)=> !prev ) } >
                        {
                            showPassword ?

                             (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                              (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                        }
                    </span>

                </label>

                <label className='relative w-full ' >
                    <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                        Confirm Password<sup className='text-pink-200 '>*</sup>
                    </p>

                    <input required
                    type={showConfirmPassword ? ("text") : ("password")}
                    name="confirmpassword" value={FormData.confirmpassword}
                    onChange={changeHandler}
                    placeholder="Confirm your password "
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100 '
                    />

                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ ()=> setconfirmShowPassword( (prev)=> !prev ) } >
                        {
                            showConfirmPassword ? 

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                             (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                        }
                    </span>

                </label>
          </div>

          <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900
      px-[12px] py-[8px] mt-6 ' >
            Create Account
          </button>


        </form>

    </div>
  )
}

export default Signupform