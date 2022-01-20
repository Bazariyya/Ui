import {Form, Input, Select} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';


const {Option} = Select;

function AdvertInfo() {
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
              <Option value = "1">1</Option>
              <Option value = "2">2</Option>

          </Select>
      </Form.Item>
      <Form.Item label = "Toplu Satış" name='bulksale' required rules={[{required:true,message:"Toplu satış bilgisi zorunludur."}]} >
          <Select placeholder={"Seçiniz"}>
              <Option value = "evet">Evet</Option>
              <Option value = "hayir">Hayır</Option>

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
