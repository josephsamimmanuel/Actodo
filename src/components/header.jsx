import Login from "../pages/login"
import { useLocation } from "react-router-dom"

function Header(){
  const data=useLocation()
    return(
        <div>
      <h1 className="text-3xl font-medium ">Hello {data.state}!</h1>
      <p>I help you Manage Activities :)</p>
      </div>
    
    )
}
export default Header