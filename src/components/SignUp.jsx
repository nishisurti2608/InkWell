import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import {useEffect, useState} from "react";

const SignUp = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [repeatPassword,setRepeatPassword] = useState();
  const [message,setMessage] = useState();
  const STORAGE_KEY =  import.meta.env.VITE_STORAGE_KEY;

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password || !repeatPassword) {
      setMessage({ error: "Please fill all the form fields." });
      return;
    }

    if (password !== repeatPassword) {
      setMessage({ error: "Passwords do not match." });
      return;
    }

    const data = { email, password };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setMessage({ success: "Register success" });
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  return (
     <div className=" flex flex-col items-center">
        <div className="w-full flex-1 mt-22 px-2">
            <h1 className="text-white text-2xl">Register Here!</h1>
            <p className="text-amber-50 text-sm mb-8">please signup to continue</p>
             <div className="flex flex-col text-white">
               {message && (
                      <p
                        className={`p-4 mb-3 text-white rounded transition-opacity duration-700 ease-in-out ${
                         message.error ? "bg-red-500 opacity-100": "bg-green-500 opacity-100"  }`}>
                             {message.error || message.success}
                      </p>
                      )}
              <label className="text-white font-medium text-sm mb-4" for="email"> Email:  </label>
            <input
              className="w-full px-8 py-4  font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769]"
              type="email"
              id="email"
              placeholder="John@demo.com"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          
            <label className="text-white font-medium text-sm mt-4" for="password"> Password:     </label>
            <input
              className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
              type="password"
              id="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="*********"
            />
             <label className="text-white font-medium text-sm mt-4" for="confirmpassword"> Confirm Password:     </label>
            <input
              className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
              type="password"
              id="confirmpassword"
              placeholder="*********"
              onChange={(e)=>{setRepeatPassword(e.target.value)}}
            />
            <button
              onClick={handleSignUp}
               className="text-[#2d3250] mt-5 cursor-pointer  border-2 border-[#f9b17a] tracking-wide font-semibold bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              Sign Up
            </button>
          </div>
            <div className="px-2 text-sm text-white  font-medium bg-[#2d3250]  transform translate-y-1/2">
              Use social media
              <div className="mt-4 flex">
                 <FaFacebookSquare className="size-7 mx-2 text-[#676f9d] hover:text-[#f9b17a] cursor-pointer" />
                 <FaSquareGooglePlus className="size-7 mx-2 text-[#676f9d] hover:text-[#f9b17a] cursor-pointer"  />
                 <FaGithub className="size-7 mx-2 text-[#676f9d] hover:text-[#f9b17a] cursor-pointer" />
              </div>
            </div>
        </div>
      </div>
  )
}

export default SignUp