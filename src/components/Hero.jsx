
import heroimg from "../assets/hero.jpg"
import Login from "./Login"
import SignUp from "./SignUp"
import { useState } from "react"






const Hero = () => {
  const[login,setLogin] = useState(true)

  function handleClick(){
    setLogin(prev => !prev)
    
  }

  return (
<div className="min-h-screen  text-gray-900 flex justify-center">
  <div className="max-w-screen-xl m-0 sm:m-10 bg-[#2d3250] shadow sm:rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
    <div className="flex">
            <p
  className={`text-sm xl:text-md font-extrabold mx-4 cursor-pointer hover:text-white ${
    login ? 'text-white underline decoration-[#f9b17a]' : 'text-[#676f9d]'
  }`} onClick={handleClick} >SignIn</p>
<p
  className={`text-sm xl:text-md font-extrabold cursor-pointer hover:text-white  ${
    !login ? 'text-white underline decoration-[#f9b17a]' : 'text-[#676f9d]'
  }`} onClick={handleClick}>SignUp</p>
        </div>
    {login ? <Login/> : <SignUp/>}
    </div>
    <div className="flex-1 bg-[#2d3250] text-center hidden lg:flex">
      <div
        className="m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `url(${heroimg})`,
 backgroundSize: "cover"

}}

      ></div>
    </div>
  </div>
  
</div>

  )
}

export default Hero