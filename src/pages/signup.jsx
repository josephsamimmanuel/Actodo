import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const users=props.users
    const setusers=props.setusers
    const[eusername,seteusername]=useState()
    const[epassword,setepassword]=useState()
    
    const navigate=useNavigate()

function handleuser(event)
{
    seteusername(event.target.value)
}

function handlepassword(event)
{
   setepassword(event.target.value)
}
function adduser()
{
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")
}
    return(
        <div className=" bg-black p-10">
            <div className=" bg-[rgb(239,239,239)] p-10 border rounded">
                <h1 className=" text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here :)</p>
               
                <div className=" flex flex-col gap-2 my-2">
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md"  placeholder="Username" onChange={handleuser}/>
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md"  placeholder="Password" onChange={handlepassword}/>
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Confirm Password"/>
                <button className=" bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>Sign Up</button>
                <p>Already have an account? <Link to={"/"} className=" underline">| Login</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Signup