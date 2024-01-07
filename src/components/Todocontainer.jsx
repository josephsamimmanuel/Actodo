import { useState } from "react"
import Addtodoform from "./addTodoform"
import Todolist from "./Todolist"
function Todocontainer()
{
    const[activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Have Cold Shower"
        }
    ])
    return(
        <div>
        <div className=" flex gap-5 flex-wrap">
    
        <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr}></Addtodoform>
        <Todolist activityArr={activityArr} setactivityArr={setactivityArr}></Todolist>

    </div>
    </div>
    )
}
export default Todocontainer