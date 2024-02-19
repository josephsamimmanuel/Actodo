import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props)
{
    const navigate=useNavigate()
    const[eusername,seteusername]=useState()
    const[epassword,setepassword]=useState()
    const[ruser,setruser]=useState(true)     //Initial ah true so we get us I will help you mnage activities
    const users=props.users
    const setusers=props.setusers
function checkuser()
{
    var userfound=false                     //DECLARE userfound as false
    users.forEach(function(item)            //Checks each Users item
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login Sucessful")                            //if user in user array and entered are same login sucessful
            userfound=true                                            //User found true
            navigate("/landing",{state: eusername})                  //IMPORTANT : Navigate to Landing Page hi {name}, navigate the username by using STATE
        }
    })
    if(userfound===false)
    {
        console.log("Login Failed")                                  //if user in user array and entered are not same login fail
        setruser(false)                                              // setruser false
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
        <div className=" bg-[rgb(255,255,255)] flex flex-col  justify-center items-center h-screen">
            <div className=" bg-[rgb(255,255,255)] border-solid border-[#EDEEF0] border-4 rounded-3xl flex flex-col justify-center items-center h-80 w-96">
                <h1 className=" text-3xl font-medium py-1">Hey Hi</h1>
                {ruser?<p className=" py-1">I help you manage your activities after you login</p>:<p className=" text-red-500 py-1">Please SignUp before Login</p>}
                
               
                <div className=" flex flex-col gap-2 my-2 py-1">
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Username" onChange={handleuser}/>
                <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Password" onChange={handlepassword}/>
                {/* <input type="text" className=" w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Confirm Password"/> */}

                <button className=" bg-[#1B66C9] text-white w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className=" underline">| Sign Up</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Login