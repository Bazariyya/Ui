import { Form, Select,Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { AdressService } from '../../Service/AdressService';

const {TextArea} = Input;

const {Option} =Select ;
function AdressDetail() {

    const adressService = new AdressService();


    const [city,setCity] = useState([]);
    const [selectedCity,setSelectedCity] = useState(null);
    const [district,setDistrict] = useState([]);


    useEffect(() => {
        adressService.getCities().then(res => {
            setCity(res.value);
        }).catch(err => {
            message.error('Şehirler alınırken bir hata oluştu')
            console.log(err)
        })
    },[])

    useEffect(() => {
        if(selectedCity !== null){
            adressService.getDistrict(0,selectedCity).then(res => {
                setDistrict(res.value)
            }).catch(err => {
                message.error('İlçeler alınırken bir hata oluştu')
                console.log(err)
            })
        }
    },[selectedCity])

    const onHandleChangeCity = (city) => {
        setSelectedCity(city)
    }
    

  return <div>
      <Form.Item label = "İl" name = "city" required>
        <Select defaultValue={'İl Seçiniz'} onChange={onHandleChangeCity}>
            {
                city.map(c => (
                    <Option key = {c.id} value={c.id}>{c.name}</Option>
                ))
            }
        </Select>
      </Form.Item>
      <Form.Item label = "İlçe" name = "district" required>
        <Select defaultValue={'İlçe Seçiniz'}>
            {
                district?.map(d => (
                    <Option key = {d.id} value = {d.id}>{d.name}</Option>
                ))
            }
        </Select>
      </Form.Item>
      <Form.Item label = "Adres Tanımı" name = "adress" required rules={[{required:true,message:'Açık adres tanımlanmak zorunludur.'}]}>
        <TextArea  />
      </Form.Item>
      
      <Form.Item label = "Ad Soyad" name = "nameSurname" required rules={[{required:true,message:'Ad Soyad zorunludur.'}]}>
        <Input  />
      </Form.Item>
      
      <Form.Item label = "Telefon Numarası" name = "phone" required rules={[{required:true,message:'Telefon Numarası zorunludur.'}]}>
        <Input type={'tel'} />
      </Form.Item>
      
      <Form.Item label = "E-Posta" name = "email" >
        <Input type = 'email'  />
      </Form.Item>
  </div>;
}

export default AdressDetail;
