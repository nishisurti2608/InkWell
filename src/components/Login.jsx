import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const Login = () => {
  
  const STORAGE_KEY =  import.meta.env.VITE_STORAGE_KEY;
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
  };

  return (
    <div className="flex flex-col items-center min-h-screen  text-white">
      <div className="w-full max-w-md py-16">
        <div className="w-full flex-1 px-2">
          <h1 className="text-white text-2xl">Welcome Back!!</h1>
          <p className="text-white text-sm mt-2">Please sign in to continue</p>

          <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-3">
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
            />

            <button
              type="submit"
              className="text-[#2d315e] mt-5 cursor-pointer border-2 border-[#9fb17a] tracking-wide font-semibold bg-[#9fb17a] hover:bg-[#2d315e] hover:text-[#9fb17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Sign In
            </button>
          </form>
          <div className="px-2 text-sm text-white font-medium  transform translate-y-1/2 mt-6">
            Use social media
            <div className="mt-4 flex">
              <FaFacebookSquare className="size-7 mx-2 text-[#676f69] hover:text-[#9fb17a] cursor-pointer" />
              <FaSquareGooglePlus className="size-7 mx-2 text-[#676f69] hover:text-[#9fb17a] cursor-pointer" />
              <FaGithub className="size-7 mx-2 text-[#676f69] hover:text-[#9fb17a] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// This code defines a Login component that allows users to log in using their email and password.