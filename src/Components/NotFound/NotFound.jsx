import React from 'react'
import SVG404 from '../../assets/img/404.svg'
import '../../Stylesheet/404.css' 
import {Button} from 'antd'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='not-found-component'>
            <img src={SVG404} className='NotFoundImage' draggable="false" />
            <h2 className='josefinText'>Sayfa Bulunamadı</h2>
            <Button type='primary' size='medium'>
                <Link to = '/' className = "link">Anasayfa'ya Dön</Link>
            </Button>
        </div>
    )
}

export default NotFound
