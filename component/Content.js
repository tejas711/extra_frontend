import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../style/content.css"
import axios from "axios";
const Content = () => {
    const [banner, setBanner] = useState("");
    const [name, setName] = useState("View all");
    const [toggle,setToggle] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://backend-5.onrender.com/home")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
                window.alert("something went wrong")

            })

    }, []);

 
    
    const handleViewButton = () => {
        if (banner) {
            setBanner("")
        } else {
            setBanner("class")
        }
        if (name == "View all") {
            setName("View less")
        } else {
            setName("View all")
        }
    }
    console.log(data[1])
   
    return (<>
        <div className={`banner${banner}`}>

            {!toggle?
            <img className="bannerimage" src={data.slice(0,1).map((data)=>{return data.imgUrl})} onClick={()=>setToggle(true)}/>:
            <video src={data.slice(0,1).map((data)=>{return data.videoUrl})} onClick={()=>setToggle(false)} controls autoPlay/>
            }
            <div className="details">
                <h1>{data.slice(0,1).map((data)=>{return data.tittle})}</h1>

                <div className="span">
                    <span>{data.slice(0,1).map((data)=>{return data.createdAt})}</span>
                    <span>15 mins</span>
                    <span>200 views</span>
                </div>

            </div>
           

        </div>
       
      
        <div className="video-content">
            <div className="btns">
                <div className="recent">
                    Recent
                </div>
                <div className="view-all" onClick={handleViewButton}>
                    {name}
                </div>

            </div>
            <div className="videos">

                
                {!banner? data.slice(0,4).map((data) => {
                       return <Card data={data} />
                    }):


                    data.map((data) => {
                       return <Card data={data} />
                    })

                }

            </div>

        </div>


    </>
    )
}
export default Content;