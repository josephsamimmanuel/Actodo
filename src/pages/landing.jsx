import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"
function Landing()
{
    const data=useLocation()
    
 return(
    <div className="p-16 bg-black">
    <div className=" p-10 bg-[#EFEFEF] border rounded-md">

  <Header name={data.state.user}></Header>

  <div className="flex justify-between gap-7 my-5 flex-wrap">
  <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Tirunelveli"}></Card>
  <Card bgcolor={"#FB6663"} title={"December 20"} subtitle={"14:20:55"}></Card>
  <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
  </div>

  <Todocontainer></Todocontainer>


    </div>
  </div>
 )   
}
export default Landing