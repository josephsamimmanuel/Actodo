// p tag containing(index,activity,deletebutton)
// this component belongs to Todolist

function Todoitem(props)
{
    const activity=props.activityArr
    const setactivity=props.setactivityArr
    

    function handledelete(id)
    {
        var temparr=activity.filter(function(item)
        {
            if(item.id === id)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivity(temparr)
    }

    return(
        <div className=" flex justify-between">
        <p>{props.index+1}. {props.activity}</p> 
        <button className=" text-red-700" onClick={function(){handledelete(props.id)}}>Delete</button>
        </div>
    )
}
export default Todoitem