import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";
import { Link, useLocation } from "react-router-dom"                    // Use navigate la anupnatha eduka use location use pandrom
import { FormatDateOptions, format } from "date-fns";
import Clock from "./clock";

function Landing()
{
    const data=useLocation()
    console.log(data)
    const formattedDate = format(new Date(), 'MMMM dd, yyyy');
    
    
 return(
  
  
    <div className="p-16 bg-[#525659] h-screen flex justify-center">
    
    <div className=" p-10 bg-[#EFEFEF] border rounded-md">
  <div className=" flex justify-between">
  <Header name={data.state}></Header>
  <h3> <Link to={"/"} className=" border-2 border-blue-800 p-2 rounded-2xl hover:underline hover:bg-blue-800 hover:text-white">Sign Out</Link> </h3>
  </div>
  <div className="flex justify-between gap-7 my-5 flex-wrap">
  <Card color={"#8272DA"} title={"31°"} subtitle={"Tirunelveli"}></Card>
  <Card color={"#FB6663"} title={formattedDate} subtitle={<Clock/>}></Card>
  <Card color={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
  </div>

  <Todocontainer></Todocontainer>


    </div>
  </div>
  
 )   
}
export default Landing