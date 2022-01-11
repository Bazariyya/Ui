import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheet/AdvertCard.css'

function AdvertCard() {
    return (
        <div className="card">
            <Link to = "/advertDetail"><img src="https://im.haberturk.com/2019/02/07/ver1549525278/2346484_810x458.jpg" style={{width:'100%'}} alt="Denim Jeans" /></Link>
            <h1 className='advert-title'>Tailored Jeans</h1>
            <Link to = "/advertDetail"><button className='advertDetailButton'>İlanı İncele</button></Link>
        </div>
    )
}

export default AdvertCard
