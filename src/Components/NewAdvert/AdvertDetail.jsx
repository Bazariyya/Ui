import React, { useState } from 'react'
import { Form, Input, Button, Radio, Modal, Select, message } from 'antd';
import { rule } from './../../Other/AdvertSettings';
function AdvertDetail({handle}) {

    const [modalVisible, setModalVisible] = useState(true);
    const { Option } = Select;

    
    return (
        <div className='advert-detail-component'>
            <Modal
                title="Yeni besi..."
                visible={modalVisible}
                onOk={() => {
                    window.open("/new-besi", "_blank")
                    setModalVisible(false)
                }
                }
                onCancel={() => { setModalVisible(false) }}
                okText="Evet"
                cancelText="Hayır"
            >
                Yeni besi tanımlamak ister misin?
            </Modal>


            <div className='advert-detail-form'>
               
                    <Form.Item required name={'title'} label="Başlık" rules={[rule]}>
                        <Input placeholder="İlan Başlığı" />
                    </Form.Item>
                    <Form.Item required name={'description'} label="Açıklama" rules={[rule]}>
                        <Input.TextArea rows={3} placeholder='İlan Açıklaması' />
                    </Form.Item>
                    <Form.Item required name={'price'} label="Fiyat" rules={[rule]}>
                        <Input
                            type={'number'}
                        />
                    </Form.Item>
                    <Form.Item required name="age" label="Yaş" rules={[rule]}>
                        <Select defaultValue="seciniz" style={{ width: '100%' }}>
                            <Option value='seciniz'>Seçin</Option>
                            <Option value="1ay">1 Ay</Option>
                            <Option value="2ay">2 Ay</Option>
                            <Option value="3ay">
                                3 Ay
                            </Option>
                            <Option value="10ay">10 Ay</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item required name="bulkSale" label="Toplu Satış" rules={[rule]}>
                        <Select defaultValue="seciniz" style={{ width: '100%' }}>
                            <Option value={'seciniz'}>Seçin</Option>
                            <Option value="evet">Evet</Option>
                            <Option value="hayır">Hayır</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item required name={'weight'} label="Tahmini Ağırlık" rules={[rule]}>
                        <Input
                            type={'number'}
                        />
                    </Form.Item>
            </div>
        </div>
    )
}

export default AdvertDetail
