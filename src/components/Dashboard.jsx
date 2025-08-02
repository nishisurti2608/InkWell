import {useState} from "react"

const Dashboard = () => {

const [userName, setUserName] = useState(localStorage.getItem("userName"))
  return (
    <div className='text-white text-2xl'>
    
      <h1>Welcome,{userName}</h1>
    
    </div>
  )
}

export default Dashboard