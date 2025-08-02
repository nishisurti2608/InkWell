import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; 



const Login = () => {

  //state variable to display message 

const[message,setMessage] = useState(" ")

//not working git

    //useEffect to display message for very short time
    useEffect(() => {
      if (message) {
        const timeout = setTimeout(() => {
          setMessage(null)
        }, 3000)
        return () => clearTimeout(timeout)
      }
    }, [message])
  
  const STORAGE_KEY =  import.meta.env.VITE_STORAGE_KEY;

  //initializing navigation 

  const navigate = useNavigate();

  const handleLogin = (formData) => {
 
    //fetching data from form entered by user

    
      const userEnteredEmail =  formData.get("email")
      const userEnteredPassword = formData.get("password")
  
    

    //fetching data from local storage 


    const data  = localStorage.getItem(STORAGE_KEY);
    
    //data parsing from string to object and destructuring on the fly

    const {registeredUserEmail,registeredUserPassword} = JSON.parse(data);

    //checking data is matching with local storage or not 

    if(registeredUserEmail !== userEnteredEmail){
      setMessage("User not found! Try again")
      return
    }


    if(registeredUserPassword !== userEnteredPassword){
      setMessage("Password is not correct! Try again")
      return
    }


// all conditions passed then go to dashboard and setting isLoggedIn to true

localStorage.setItem("isLoggedIn", "true");
navigate("/dashboard"); 

    
  }

  return (
    <div className="flex flex-col items-center min-h-screen  text-white">
      <div className="w-full max-w-md py-16">
        <div className="w-full flex-1 px-2">
          <h1 className="text-white text-2xl">Welcome Back!!</h1>
          <p className="text-white text-sm mt-2">Please sign in to continue</p>

          <form action={handleLogin} className="mt-8 flex flex-col gap-3">
            <label
              className="text-white font-medium text-sm mb-4"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              name="email"
              className="inputstyle"
              type="email"
              id="email"
              placeholder="john@demo.com"
              required
              autoComplete="on"
            />
            <label
              className="text-white font-medium text-sm mt-4"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              name="password"
              className="inputstyle"
              type="password"
              id="password"
              placeholder="***********"
              required
              autoComplete="on"
            />

                            <button
                                  type="submit"
                                  className="text-[#2d3250] mt-5 cursor-pointer  border-2 border-[#f9b17a] tracking-wide font-semibold bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                  Sign In
                            </button>

                {/* message goes here  */}
                    
                    
                {message && <p className="px-2 text-sm text-[#f9b17a]  font-medium bg-[#2d3250]  transform translate-y-1/2">{message}</p>}
          </form>
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
    </div>
  );
};

export default Login;

// This code defines a Login component that allows users to log in using their email and password.