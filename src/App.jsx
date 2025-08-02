
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ContactUs from "./components/pages/ContactUs"
import Membership from "./components/pages/Membership"
import OurStory from "./components/pages/OurStory"
import Write from "./components/pages/Write"
import Dashboard from "./components/Dashboard"

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col mx-12">
         <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/write" element={<Write />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
    
       <Footer/>
      </div>
      </BrowserRouter>
     
  
    </>
  )
}

export default App
