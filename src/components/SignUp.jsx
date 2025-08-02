import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState,useEffect } from "react";


const SignUp = () => {

  //grabbing localhost key

const STORAGE_KEY =  import.meta.env.VITE_STORAGE_KEY;

//state variable to display message 

const[message,setMessage] = useState(" ")


    //useEffect to display message for very short time
    useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  //formData handling

  function HandleSignUp(formData){


    const name = formData.get("name")
    const email=formData.get("email")
    const password = formData.get("password")
    const confirmPassword = formData.get("confirmpassword")

    // Validation for password matching

    if(password !== confirmPassword){
      setMessage("Passwords do not match! Try again")
      return
    }

    if (password.length < 6) {
       setMessage( "Password must be at least 6 characters long" );
       return;
    }

    //setting data in localstorage

    const data = {name,email, password}
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setMessage("Done! Please Login")

  }

  return (
     <div className=" flex flex-col items-center">
        <div className="w-full flex-1 mt-22 px-2">
            <h1 className="text-white text-2xl">Register Here!</h1>
             <p className="text-amber-50 text-sm mb-8">please signup to continue</p>
                  <div className="flex flex-col text-white">
          
                           <form action={HandleSignUp}>
                               <label className="text-white font-medium text-sm mb-4" htmlFor="name"> Name:  </label>
                               <input
                                  className="w-full px-8 py-4  font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769]"
                                  type="text"
                                  name="name"
                                  placeholder="John Dave"
                                  required

                                />
          

                              <label className="text-white font-medium text-sm mb-4" htmlFor="email"> Email:  </label>
                                <input
                                  className="w-full px-8 py-4  font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769]"
                                  type="email"
                                  name="email"
                                  placeholder="John@demo.com"
                                  required

                                />
          
                              <label className="text-white font-medium text-sm mt-4" htmlFor="password"> Password:     </label>
                                <input
                                  className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
                                  type="password"
                                  name="password"
                                  autoComplete="on"
                                  placeholder="******"
                                  required
                                />
             
                              <label className="text-white font-medium text-sm mt-4" htmlFor="confirmpassword"> Confirm Password:     </label>
                                <input
                                  className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
                                  type="password"
                                  name="confirmpassword"
                                  placeholder="******"
                                  autoComplete="on"
                                  required

                              />
                                
                                
                            <button
                                  type="submit"
                                  className="text-[#2d3250] mt-5 cursor-pointer  border-2 border-[#f9b17a] tracking-wide font-semibold bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                  Sign Up
                            </button>

                            {/* message goes here  */}
                    
                    
                              {message && <p className="px-2 text-sm text-[#f9b17a]  font-medium bg-[#2d3250]  transform translate-y-1/2">{message}</p>}
                          
                           </form>
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