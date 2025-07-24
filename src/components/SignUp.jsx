import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
     <div className=" flex flex-col items-center">
        
      
        <div className="w-full flex-1 mt-22 px-8">
            <h1 className="text-white text-2xl">Register Here!</h1>
            <p className="text-amber-50 text-sm mb-8">please signup to continue</p>
             <div className="flex flex-col">
              <label className="text-white font-medium text-sm mb-4" for="email"> Email:  </label>
            <input
              className="w-full px-8 py-4  font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769]"
              type="email"
              id="email"
              placeholder="John@demo.com"
            />
          
            <label className="text-white font-medium text-sm mt-4" for="password"> Password:     </label>
            <input
              className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
              type="password"
              id="password"
              placeholder="*********"
            />
             <label className="text-white font-medium text-sm mt-4" for="confirmpassword"> Confirm Password:     </label>
            <input
              className="w-full px-8 py-4 font-medium bg-[#676f9d] border border-[#676f9d] placeholder-[#434769] text-sm focus:outline-none focus:border-[#f9b17a] focus:bg-[#414769] mt-5"
              type="password"
              id="confirmpassword"
              placeholder="*********"
            />
       
            <button className="text-[#2d3250] mt-5 cursor-pointer  border-2 border-[#f9b17a] tracking-wide font-semibold bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        
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