
import logo from "../assets/logo.png"
import {Link,useNavigate,useLocation} from "react-router-dom"
import { useState,useEffect } from "react"


const Header = () => {

  //state to maintain sigin button text

const[buttonText,setButtonText] = useState("Sign In")

//initializing navigation and location

const navigate = useNavigate();
const location = useLocation();

//when component load set button text 

useEffect(() => {
  //making sure that user is logged in 

  const isLoggedIn = localStorage.getItem("isLoggedIn")

  //resetting button text upon isLoggedin value and want to render this component everytime when path changes


  setButtonText(isLoggedIn === "true" ? "Sign Out" : "Sign In")
}, [location])

//logging out user on button click 

const handleAuthClick = () => {
  if (buttonText === "Sign Out") {
    // log out user
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userName")
    setButtonText("Sign In")
    navigate("/") // go back to homepage
  } 
  else {
    navigate("/")
  }
}

  return (
    <>
    <header className="flex items-center my-4 ">
          <Link to="/">
   <div className="flex items-center">

     <h1 className="font-semibold text-2xl text-[#f9b17a]">InkWell</h1>
        <img className="m-2 w-10 h-10" src={logo} alt="logo image which has inked quil and it's writing something"/>
   
       
    </div>
         </Link>
      <nav className="flex space-x-10 ml-auto mr-auto">
   
        <Link to="/ourstory" className="text-white font-medium py-4 cursor-pointer hover:text-[#f9b17a] hover:before:scale-x-100 hover:before:origin-left  relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#f9b17a] before:absolute before:left-0 before:bottom-0 ">Our Story</Link>
        <Link to="/membership" className="text-white font-medium py-4 cursor-pointer hover:text-[#f9b17a] hover:before:scale-x-100 hover:before:origin-left  relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#f9b17a] before:absolute before:left-0 before:bottom-0 ">Membership</Link>
        <Link to="/write" className="text-white font-medium py-4 cursor-pointer hover:text-[#f9b17a] hover:before:scale-x-100 hover:before:origin-left  relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#f9b17a] before:absolute before:left-0 before:bottom-0 ">Write</Link>
        <Link to="/contactus" className="text-white font-medium py-4 cursor-pointer hover:text-[#f9b17a] hover:before:scale-x-100 hover:before:origin-left  relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#f9b17a] before:absolute before:left-0 before:bottom-0 ">Contact Us</Link>
  
         </nav>

      <button onClick={handleAuthClick} className="text-[#2d3250] font-medium cursor-pointer border-2 px-4 py-2 bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] ml-auto ">{buttonText}</button>
 
   
 

    </header>
       <hr className="h-px border-0 dark:bg-gray-700"/>
    
     </>
  )
 
}

export default Header;