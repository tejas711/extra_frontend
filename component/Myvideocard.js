import React from "react"
import"../style/myvideos.css"
const Myvideocard = ({data,setToggle,setData1,setVisible,setCard,card})=> {
    const handleEvery= ()=>{
        setData1(data);
        setToggle(true);
        setVisible("ri");
        setCard("1")
    }
  return (
    <>
    <div className={`my-video-card${card}`} onClick={handleEvery}>
        <img src={data.imgUrl} alt='image not found'/>
        <div className={`my-video-btn${card}`}>
            <img src='https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg' alt='img not'/>
        </div>
        <h3>{data.tittle}</h3>
    </div>    
    </>
  )
}
export default Myvideocard