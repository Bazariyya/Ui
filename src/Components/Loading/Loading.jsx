import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react'
import '../../Stylesheet/Loading.css'
function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <div className="loading"><Spin indicator={antIcon} /></div>
    )
}

export default Loading
