//Today's Activity, You have not added anything yet, Map function that retrives id and activity from activityArr

import Todoitem from "./Todoitem"

function Todolist(props)
{
    const activity=props.activityArr
    const setactivity=props.setactivityArr
    return(
        <div className="bg-[#BDB4EA] border rounded p-1 flex-grow">
        <h1 className="t text-2xl font-medium">Today's Activity</h1>
        
        {activity.length===0?<p>You have not added anything yet</p>:""}
        {
            activity.map(function(item,index){console.log(item)
                return(
                <Todoitem item={item} index={index} id={item.id} activity={item.activity} activityArr={activity} setactivityArr={setactivity}></Todoitem>)
            })
           
        }
         
    </div>
    )
}
export default Todolist