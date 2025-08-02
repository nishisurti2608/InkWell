import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import { FaHandsClapping } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";


const Dashboard = () => {

  //Grabbing name from local storage and saving it on state
const [userName, setUserName] = useState(localStorage.getItem("userName"))


//Need to set blogs in state too for sync ui
const [userBlogs, setUserBlogs] = useState([]);


useEffect(() => {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Filter blogs by logged-in user
  const userSpecificBlogs = blogs.filter(blog => blog.userName === userName);

  //setting ui using state
  setUserBlogs(userSpecificBlogs);

}, [userName]); //this should render whenever username change

//setting fake blogs data
localStorage.setItem("blogs", JSON.stringify([
  { userName: "Bob Builder", title: "React Basics", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium qui, repudiandae maiores quibusdam magni quam quia corporis molestiae quisquam optio iusto culpa a.",hashTags:["React","NodeJs"], date:"15-Jun-2025", claps:"71", comments: "21" },
  { userName: "rahul", title: "Node Tips", content: "..." }
]))


return (
  <div className='text-white text-2xl p-4'>
    <h1 className="mt-5">Welcome, <span className="text-[#f9b17a]">{userName}</span></h1>
    <div className="mt-4">
      {userBlogs.length > 0 ? (
        <div>
          <h2 className="text-xl mb-2">Your Blogs:</h2>
          <ul className="list-inside text-base">
            {userBlogs.map((blog, index) => (
              <li key={index}>
               <div className="max-w-md mx-auto bg-[#2d3250] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://www.alleywatch.com/wp-content/uploads/2019/03/achievement-agreement-arms-1068523.jpg"/>
        </div>
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-white font-semibold">{blog.title}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-[#f9b17a] hover:underline">Incredible
                accommodation for your team
            </a>
            <p className="mt-2 text-gray-300">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
          
<div className="mt-4">
  {blog.hashTags.map((tag) => <span key={tag} className="mr-3 px-3 py-1 text-sm font-medium rounded-full bg-[#161F30] text-[#f9b17a] inline-flex items-center">
      {tag}
        </span> )}
 
        
  
        
        
        </div>
        <div className="mt-6 flex gap-4 items-center">
  <div className="flex items-center gap-1">
    <CiCalendarDate className="size-6 text-[#f9b17a]" />
    <span>{blog.date}</span>
  </div>
  
  <div className="flex items-center gap-1">
    <FaHandsClapping className="size-6 text-[#f9b17a]" />
    <span>{blog.claps}</span>
  </div>
  
  <div className="flex items-center gap-1">
    <TfiComment className="size-4 text-[#f9b17a]" />
    <span>{blog.comments}</span>
  </div>
  
</div>


        </div>
       
    </div>
</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
        <div className="flex flex-col justify-center items-center my-60 ">
        <p className="text-center text-2xl text-gray-300">
          You haven’t written any blogs yet.
        </p>
        <Link to="/write" className="text-[#2d3250] text-base font-semibold mt-8 cursor-pointer  border-2 border-[#f9b17a] tracking-wide  bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] p-4 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
         Write Now
        </Link>
        
      </div>

    
      </>
      
      )}
    </div>
  </div>
);
};


export default Dashboard