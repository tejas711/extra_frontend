import React, { useState } from 'react'
import "../style/card.css"
import Videoplayer from './Videoplayer'
const Card = ({ data }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <>{!toggle ?
            <div className='card' onClick={() => { setToggle(true) }}>
                <img src={data.imgUrl} alt='image not found' />
                <div className='btn'>
                    <img src='https://www.freeiconspng.com/thumbs/video-play-icon/video-play-icon-24.png' alt='img not' />
                </div>
                <h3>{data.tittle}</h3>
            </div> :
            <Videoplayer setToggle={setToggle} data={data} />
        }
        </>
    )
}
export default Card