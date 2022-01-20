import React, { useEffect, useState } from 'react';
import { Cascader, Form } from 'antd';
import { useSelector } from 'react-redux';
function SelectCategory() {

    const categoryData = useSelector(state => state.categories.data);
    const categoryService = useSelector(state => state.service)[3]

    const [options, setOptions] = React.useState([]);



    useEffect(() => {
        const optionLists = [

        ];
        categoryData.forEach(c => {
            optionLists.push({ value: c.id, label: c.name, isLeaf: c.categoryId !== null ? true : false })
        })
        setOptions(optionLists)

    }, [categoryData])


    const onChange = (value, selectedOptions) => {
        //console.log(value, selectedOptions);
    };

    const loadData = selectedOptions => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        const categoryId = selectedOptions[0].value
        categoryService.getAllSubCategories(categoryId).then(res => {
            const { value } = res;
            const childCategory = []
            value.forEach(v => {
                childCategory.push({ label: v.name, value: v.id, ...v })
            })
            targetOption.children = childCategory
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            targetOption.loading = false;
            setOptions([...options]);
        })
    };


    return <div className='select-category'>
        <Form.Item label = "İlanın Bulunacağı Kategori" required rules={[{required:true,message:"Kategori seçilmesi zorunlu alandır."}]} name="category">
            <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />
        </Form.Item>
    </div>;
}

export default SelectCategory;
