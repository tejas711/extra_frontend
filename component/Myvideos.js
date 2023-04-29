import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import "../style/myvideos.css";
import Myvideocard from './Myvideocard';
import Deletecard from './Deletecard';
// https://backend-5.onrender.com
function Myvideos() {
    const [data,setData] = useState([]);
    const [toggle,setToggle] = useState(false);
    const [data1,setData1] = useState([]);
    const [visible,setVisible] = useState("")
    const [card,setCard] = useState("")
    useEffect(() => {
        const newToken = localStorage.getItem("mytoken")
        axios.post("http://localhost:8080/myvideos", { newToken })
          .then((res) => {
            console.log(res)
            setData(res.data)
          }).catch((err) => {
            console.log(err.response.data)
            window.alert("Something went wrong: " + err.response.data.message)
          })
      }, []);
      

  return (
    <>
    <Navbar/>
     <div id='myvideo-main'>
        <div id={`myvideo-left${visible}`}>
            
           {
            data.map((data)=>{
                return <Myvideocard data={data} setToggle={setToggle} setData1={setData1} setVisible={setVisible} setCard={setCard} card={card}/> 
            })
           }
        </div>

        <div id='myvideo-right'>
           {toggle && <Deletecard data1={data1} setToggle={setToggle} setVisible={setVisible} setCard={setCard}/>}
        </div>

    </div>
    </>
  )
}

export default Myvideos