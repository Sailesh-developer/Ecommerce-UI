import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLogin } from 'react-icons/ai';
import InputField from "../shared/InputField";
import shoppingCart from '../../assets/shopping-cart-with-background.png';
import { useDispatch } from "react-redux";
import { authenticateSignInUser } from "../../store/actions";
import toast from "react-hot-toast";


const LogIn = () => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},  
    } = useForm({
        mode: "onTouched",
    })

    const loginHandler = async (data) => {
        console.log("Login Click");
        dispatch(authenticateSignInUser(data,toast,reset,navigate,setLoader));
    }

    return(
        <div className="min-h-[calc(100vh-70px)] flex flex-col md:flex-row justify-center items-center">

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 gap-y-6">
               <img
               src={shoppingCart} 
               alt="Login Illustration"
               className="max-w-full h-auto"
                />
                <p className="text-slate-800 text-center font-montserrat lg:text-4xl text-2xl font-bold mr-12.5">Where <span className="text-orange-500">quality</span> meets <span className="text-blue-500">convenience</span></p>
             </div>

             <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <form
            onSubmit={handleSubmit(loginHandler)}
            className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
            >
             <div className="flex flex-col items-center justify-center">
             <AiOutlineLogin className = "text-slate-800 text-5xl"/>
             <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
             Login here
             </h1>
             </div>
             <hr className="mt-2 mb-5 text-black"/>
             <div className="flex flex-col gap-3">
                <InputField 
                label="Username"
                required
                id="username"
                type="text"
                message="*Username is required"
                placeholder="Enter your username"
                register={register}
                errors={errors}
                />


               <InputField 
                label="Password"
                required
                id="password"
                type="password"
                message="*Password is required"
                placeholder="Enter your password"
                register={register}
                errors={errors}
                />
             </div>
             <button
             disabled={loader}
             className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3 cursor-pointer"
             type="submit"
             >
                {loader ? (
                  <>Loading...</>
                ) : (
                   <>Login</>
                )}
             </button>

             <p className="text-center text-sm text-slate-700 mt-6">
                Don't have an account?
                <Link className="font-semibold underline hover:text-black"
                to="/register"
                >
                <span>SignUp</span>
                </Link>
             </p>
            </form>
            </div>
        </div>
    )
}

export default LogIn;