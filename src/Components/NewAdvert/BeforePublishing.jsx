import { Divider, Form,Button } from 'antd'
import React from 'react'
import UploadImage from '../UploadImage/UploadImage';
import { rule } from './../../Other/AdvertSettings';
import { useNavigate } from 'react-router-dom';

function BeforePublishing() {


    const navigate = useNavigate();

    return (
        <div className='publishing-component'>
            <div className='publishing-form'>
                <Form.Item label="İlan Resimleri" required rules = {[rule]}>
                    <UploadImage />
                </Form.Item>
            </div>
            <Divider>İlanınız bu şekilde görünecek.</Divider>
            <div className='before-publishing-component'>
                <Button onClick={() => {window.open("/advertDetail","_blank")}} type= "primary">Yeni Sekmede Aç</Button>
            </div>
        </div>
    )
}

export default BeforePublishing
