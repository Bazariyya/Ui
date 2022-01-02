import { Divider, Form } from 'antd'
import React from 'react'
import UploadImage from '../UploadImage/UploadImage';
import { rule } from './../../Other/AdvertSettings';

function BeforePublishing() {
    return (
        <div className='publishing-component'>
            <div className='publishing-form'>
                <Form.Item label="İlan Resimleri" required rules = {[rule]}>
                    <UploadImage />
                </Form.Item>
            </div>
            <Divider />
            <h6>İlanınız bu şekilde görünecek</h6>
        </div>
    )
}

export default BeforePublishing
