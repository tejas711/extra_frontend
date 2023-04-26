import React from 'react'
import "../style/videoplayer.css"

function Videoplayer({setToggle,data}) {
  return (
    <div className='main'>
        <div className='close-icon'>
            <img onClick={()=>{setToggle(false)}} src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-cross-icon-png-image_960976.jpg" alt=''/>
        </div>
        <div className='left'>
            <video src={data.videoUrl} style={{width:"100%",height:"70%"}} controls/>
            <div className='info'>
                <h2>{data.tittle}</h2>
                <h4>{data.desc}</h4>
            </div>
        </div>
        <div className='right'>
            <div className='releted-content'>
                <img src={data.imgUrl} alt='' style={{width:"100%",height:"100%"}}/>
                <h3>{data.tittle}</h3>
            </div>
            <div className='releted-content'>
                <img src={data.imgUrl} alt='' style={{width:"100%",height:"100%"}}/>
                <h3>{data.tittle}</h3>
            </div>
            <div className='releted-content'><img src={data.imgUrl} alt='' style={{width:"100%",height:"100%"}}/>
            <h3>{data.tittle}</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Videoplayer