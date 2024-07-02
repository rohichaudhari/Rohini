// import React from 'react'
import img1 from '../../Assets/login-bg.jpg';
import img2 from '../../Assets/sign-bg.jpg';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Signn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("")

    const getEmail = localStorage.getItem("Email");
    const getPw = localStorage.getItem("Password");

    function onSubmitFun(e) {
        e.preventDefault();  //interview
        if (!email && !pw) {
            alert("plz fill all field")
        } else {
            alert("succesfully register user")
            localStorage.setItem("Email", email);
            localStorage.setItem("password", pw)
            navigate("/")
        }
    }

    function onSubmitLogin(e) {
        e.preventDefault();
        if (!email && !pw) {
            alert("plz fill all field")
        } else if (email !== getEmail && pw !== getPw) {
            alert("plz fill currect details")
        }
        else {
            alert("succesfully login user")
        }
    }
    return (
        <div>
            <div>

                <div className='sign-bg p-3'>
                    <div className='sign flex'>
                        <div className='p-5'>
                            <p className='text-slate-500 font-bold'>Home----sign in</p>
                            <p className='text-4xl font-bold mt-3' >Sign In</p>
                        </div>
                    </div>
                </div>


                <div className='container mx-auto flex justify-between items-center'>
                    <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        <div className='signpart-1 '>
                            <div className='max-w-lg shadow rounded-lg bg-slate-100'>
                                <img src={img1} alt='image' />
                                <div className='p-2'>
                                    <div className='login-content flex bg-slate-100 '>
                                        <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                            <i className=" text-2xl ri-lock-line text-red-400"></i>
                                        </div>
                                        <div className='tlogin p-2'>
                                            <h1 className='text-slate-800 text-xl font-semibold text-start '>Login Here</h1>
                                            <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <form className='p-3' onSubmit={onSubmitFun}>
                                            <div className='bg-white h-16 w-full   rounded flex justify-center items-center gap-2 '>

                                                <span><i class="fa-regular fa-user "></i></span>
                                                <input onChange={(e) => setEmail(e.target.value)} placeholder='Username/email address' type='email' className=' outline-none' />
                                            </div>
                                            <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>

                                                <span><i class="fa-solid fa-key"></i></span>
                                                <input onChange={(e) => setPw(e.target.value)} placeholder='Password' type='password' className=' outline-none' />
                                            </div>
                                            <div className='checbox flex justify-between items-center p-2'>
                                                <div className='form-check'>
                                                    <input type='checkbox' ></input>
                                                    <label > Remember me</label>
                                                </div>
                                                <div className='forget'>
                                                    <a href='#' className=' underline'>Forget Password</a>
                                                </div>
                                            </div>
                                            <div className=' bg-red-600 rounded h-14 flex justify-center items-center p-2'>
                                                <button type='submit' className='text-white text-lg font-semibold border-0'>REGISTER NOW
                                                    <i class="fa-solid fa-arrow-right mx-2"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='singpart-2'>

                            <div className='max-w-lg shadow rounded-lg bg-slate-100 p-3'>
                                <img src={img2} alt='image' />
                                <div className='login-content flex bg-slate-100'>
                                    <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                        <i class="ri-folder-user-fill text-2xl text-red-400"></i>
                                    </div>
                                    <div className='tlogin p-2'>
                                        <h1 className='text-slate-800 text-xl font-semibold text-start '>
                                            Sign Up</h1>
                                        <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                    </div>
                                </div>
                                {/* form start */}
                                <div className='p-3'>
                                    <form onSubmit={onSubmitLogin}>
                                        <div className='bg-white h-16 w-full   rounded flex justify-center items-center gap-2 '>

                                            <span><i class="fa-regular fa-envelope"></i></span>
                                            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email address' type='email' className=' outline-none' />
                                        </div>
                                        <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>

                                            <span><i class="fa-solid fa-key"></i></span>
                                            <input onChange={(e) => setPw(e.target.value)} placeholder='Password' type='password' className=' outline-none' />
                                        </div>
                                        <div className='checbox flex justify-between items-center p-2'>
                                            <div className='form-check'>

                                                <a href='#' className=' underline'> Already Have Account?</a>
                                            </div>

                                        </div>
                                        <div className=' bg-gray-200 hover:bg-black  rounded h-14 flex justify-center items-center p-2'>
                                            <button type='submit' className='text-black text-lg  hover:text-white font-semibold outline-none border-0'>LOGIN IN
                                                <i class="fa-solid fa-arrow-right mx-2"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* form close */}
                            </div>
                        </div>{/* card close */}
                    </div>
                </div>   {/* grid close */}

            </div>
        </div>
    )
}

export default Signn