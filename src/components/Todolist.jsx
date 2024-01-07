
import Todoitem from "./Todoitem"

function Todolist(props)
{
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    return(
        <div className="bg-[#BDB4EA] border rounded p-1 flex-grow">
        <h1 className="t text-2xl font-medium">Today's Activity</h1>
        
        {activityArr.length===0?<p>You have not added anything yet</p>:""}
        {
            activityArr.map(function(item,index){
                return(<Todoitem item={item} index={index} id={item.id} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr}></Todoitem>)
            })
        }

    </div>
    )
}
export default Todolist