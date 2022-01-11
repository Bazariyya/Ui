import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheet/AdvertCard.css'

function AdvertCard({product}) {

    console.log(product)
    return (
        <div className="card">
            <Link to = "/advertDetail"><img src="https://im.haberturk.com/2019/02/07/ver1549525278/2346484_810x458.jpg" style={{width:'100%'}} alt="Denim Jeans" /></Link>
            <h1 className='advert-title'>{product.name}</h1>
            <span className='pricetext'>{product.price}₺</span>
            <div className='description'>
                Bu bir açıklamadır
                Bu bir açıklamadır

                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır

            </div>
            <Link to = "/advertDetail"><button className='advertDetailButton'>İlanı İncele</button></Link>
        </div>
    )
}

export default AdvertCard
