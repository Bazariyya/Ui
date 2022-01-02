import { Form, Select } from 'antd'
import React, { useState } from 'react'
import { rule, getAllCities, getAllCounty } from './../../Other/AdvertSettings';
const { Option } = Select;
function AdvertAdressDetail({ handle }) {

    const [counties,setCounties] = useState([]);
    const onHandleChangeCityData  =(value) => {
        const id = value.split('-')[1];
        setCounties(getAllCounty(id));
    }

    const onHandleChangeCountyData = (value) => {
        console.log(value)
    }


    return (
        <div className='advert-detail-component'>
            <div className='advert-adress-detail-form'>
                <Form.Item name = "il" label="İl" required rules={[rule]}>
                    <Select showSearch filterSort={(optionA, optionB) =>
                        optionA.children.toUpperCase().localeCompare(optionB.children.toUpperCase())
                    } defaultValue="seciniz" style={{ width: '100%' }} onChange={onHandleChangeCityData}>
                        <Option value="seciniz">Seçin ya da arayın</Option>
                        {
                            getAllCities().map(city => (
                                <Option value={`${city.name}-${city.id}`}>{city.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>

                <Form.Item name = "ilce" label="İlçe" required rules={[rule]}>
                <Select  showSearch filterSort={(optionA, optionB) =>
                        optionA.children.toUpperCase().localeCompare(optionB.children.toUpperCase())
                    } defaultValue="seciniz" style={{ width: '100%' }} onChange={onHandleChangeCountyData}>
                        <Option value="seciniz">Seçin ya da arayın</Option>
                        {
                            counties.map(county => (
                                <Option value={`${county.name}-${county.id}`}>{county.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
            </div>
        </div>
    )
}

export default AdvertAdressDetail
