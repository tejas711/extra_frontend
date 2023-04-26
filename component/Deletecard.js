import React from "react";
import "../style/deletecard.css"
const Deletecard =({setToggle,data1,setVisible,setCard})=> {

    const closePopup = () =>{
        setToggle(false);
        setVisible("");
        setCard("");
    }

  return (
    <>
     <div id="delete-main">
        <div id="photo">
            <img src={data1.imgUrl} alt="not found"/>
        </div>
        <div id="photo-name">
            <h1>{data1.tittle}</h1>
        </div>
        <div id="photo-desc">
            <p>{data1.desc}</p>
        </div>
        <div id="photo-btns">
            <button>Delete</button>
            <button onClick={closePopup}>Cancel</button>
        </div>
         
    </div>
    </>
  
  )
}

export default Deletecard