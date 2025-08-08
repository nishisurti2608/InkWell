
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
   <div className='mt-16 flex flex-col justify-center items-center'>
        <h1 className='text-white text-center text-3xl mb-16'>Oops...Page not found</h1>
        <Link to="/">

            <button className="text-[#2d3250] font-medium cursor-pointer border-2 px-4 py-2 bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] ml-auto ">Go Home</button>
        </Link>

        <DotLottieReact
         src="https://lottie.host/36001287-5e0d-4017-a659-e1710ca164dd/zdJJ7gtIG0.lottie"
        loop
        autoplay
        />
 
    </div>
    
  )
}

export default NotFound