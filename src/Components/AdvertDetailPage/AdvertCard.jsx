import React from 'react'
import { Card, Avatar, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
function AdvertCard() {
    return (
        <Card
            style={{ width: 300, margin: 10 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Button type='primary' shape='square' icon={<ArrowRightOutlined />}>
                    <Link className='link' to="/advertDetail">
                        <p className='whiteColor'>İncele</p>
                    </Link>
                </Button>
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}

export default AdvertCard
