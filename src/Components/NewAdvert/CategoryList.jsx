import { List } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react';

function CategoryList({ data, propsSelectedCategory, onHandleChangeSelectedCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        setSelectedCategory(propsSelectedCategory)
    }, [propsSelectedCategory])


    return (
        <List
            size="small"
            bordered
            dataSource={data}
            renderItem={item => <List.Item onClick={() => { onHandleChangeSelectedCategory(item) }} className={selectedCategory?.id === item?.id ? "active" : ""} style={selectedCategory?.id === item?.id ? { color: "white", cursor: "pointer",fontSize:"22px" } : { cursor: "pointer",fontSize:"22px" }}>{item.name}</List.Item>}
        />
    )
}

export default CategoryList
