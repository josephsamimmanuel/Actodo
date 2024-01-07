import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props)
{
    const navigate=useNavigate()
    const[eusername,seteusername]=useState()
    const[epassword,setepassword]=useState()
    const[ruser,setruser]=useState(true)
    const users=props.users
    const setusers=props.setusers
function checkuser()
{
    var userfound=false
    users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login Sucessful")
            userfound=true
            navigate("/landing",{state: {user:eusername}})
        }
    })
    if(userfound===false)
    {
        console.log("Login Failed")
        setruser(false)
    }
}

function handleuser(event)
{
    seteusername(event.target.value)
}

function handlepassword(event)
{
   setepassword(event.target.value)
}

    return(
        <div className=" bg-black p-10">
            <div className=" bg-[rgb(239,239,239)] p-10 border rounded">
                <h1 className=" text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you manage your activities after you login</p>:<p className=" text-red-500">Please SignUp before Login</p>}
                
               
                <div className=" flex flex-col gap-2 my-2">
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Username" onChange={handleuser}/>
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Password" onChange={handlepassword}/>
                {/* <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Confirm Password"/> */}

                <button className=" bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className=" underline">| Sign Up</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Login