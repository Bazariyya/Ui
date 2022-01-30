import {Form, Input, Select} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'


const {Option} = Select;

function AdvertInfo() {



    const definition = useSelector(state => state.definition)
    const isMassMaleDefinition = definition[1]
    const ageDefinition = definition[3];
    const descriptionDefinition = definition[6]
    
    const definitionService = useSelector(state => state.service[4])
    console.log(definition)

    const [ageOptions,setAgeOptions] = useState([]);
    const [isMassMaleOptions,setIsMassMaleOption] = useState([])
    useEffect(() => {
        definitionService.getDefById(ageDefinition.id).then(res => {
            setAgeOptions(res.value)
        }).catch(err => {
            console.log(err)
        })
    },[])

    useEffect(() => {
        definitionService.getDefById(isMassMaleDefinition.id).then(res => {
            setIsMassMaleOption(res.value)
        }).catch(err => {
            console.log(err);
        })
    },[])

  return <div className='advert-info-step'>
      <Form.Item label = "Başlık" name={'title'} required rules={[{required:true,message:"İlan başlığı zorunludur."}]}>
          <Input maxLength={100} />
      </Form.Item>
      <Form.Item label = "Açıklama" name='description' required rules={[{required:true,message:"İlan açıklaması zorunludur."}]}>
          <TextArea maxLength={100} />
      </Form.Item>
      <Form.Item label = "Fiyat Bilgisi" name='price' required rules={[{required:true,message:"İlan fiyatı zorunludur."},{min:1,message:'Fiyat en az 1 tl olmalıdır.'}]}>
          <Input type={'number'} />
      </Form.Item>
      <Form.Item label = "Yaş" name='age' required rules={[{required:true,message:"Yaş bilgisi zorunludur."}]}>
          <Select placeholder={"Seçin"}>
            {
                ageOptions.map((age,i) => (
                    <Option key = {i} value = {`${age.value}`}>{age.value}</Option>
                ))
            }
          </Select>
      </Form.Item>
      <Form.Item label = "Toplu Satış" name='bulksale' required rules={[{required:true,message:"Toplu satış bilgisi zorunludur."}]} >
          <Select  placeholder={"Seçiniz"}>
              {
                  isMassMaleOptions.map((mass,i) => (
                    <Option key = {i} value = {`${mass.value}`}>{mass.value}</Option>
                  ))
              }
          </Select>
      </Form.Item>
      <Form.Item label = "Tahmini Ağırlık" name='weight' required rules={[{required:true,message:"Ağırlık bilgisi zorunludur."},{min:1,message:'Ağırlık en az 1kg olmalıdır.'}]}>
          <Input type={'number'} />
      </Form.Item>
      
      <Form.Item label = "Cinsi" name='type' required  rules={[{required:true,message:"İlan cinsi belirtmek zorunludur."}]}>
          <Select placeholder={"Cins 1"}>
              <Option value = "cins1">Cins 1</Option>
              <Option value = "cins2">Cins 2</Option>
          </Select>
      </Form.Item>

  </div>;

}

export default AdvertInfo;
