import React from 'react'
import '../../Stylesheet/AdvertDetailPage.css'
import { PageHeader, Button, Descriptions, Image, Divider } from 'antd';


function AdvertDetailPage() {
    return (
        <div className='advert-detail-page-component'>
            <div className='advert-detail-area'>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Geri Dön"
                    extra={[
                        <Button key="3" danger>İlanı Sil</Button>,
                        <Button key="2" type='primary'>İlanı Düzenle</Button>,
                    ]}
                >
                </PageHeader>
                <div className='details'>
                    <div className='details-left'>
                        <Image.PreviewGroup>
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />

                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />

                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                            <Image
                                width='25%'
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />

                        </Image.PreviewGroup>
                    </div>
                    <div className='details-right'>
                        <Divider plain>İlan Bilgileri</Divider>
                        <Descriptions
                            bordered
                            size={"default"}
                            layout='vertical'
                        >
                            <Descriptions.Item label="Başlık">Bu bir ilan başlığıdır</Descriptions.Item>
                            <br />
                            <br />
                            <Descriptions.Item label="Fiyat">5000₺</Descriptions.Item>
                            <Descriptions.Item label="Yaş">1-3 Ay</Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Toplu Satış">Evet</Descriptions.Item>
                            <Descriptions.Item label="Tahmini Ağırlık">350 KG</Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Cinsi">-</Descriptions.Item>
                            <br />
                            <br />
                            <Descriptions.Item label="Açıklama">Bu bir ilanın açıklamasıdır
                            </Descriptions.Item>
                        </Descriptions>
                        <Divider plain>Adres ve İletişim Bilgileri</Divider>

                        <Descriptions
                            bordered
                            size={"default"}
                        >
                            <Descriptions.Item label="İl">Kırşehir</Descriptions.Item>
                            <Descriptions.Item label="İlçe">Merkez</Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Adres">Medrese Mahallesi...</Descriptions.Item>
                            <br />
                            <br />
                            <Descriptions.Item label="Ad-Soyad">Yusuf Tekin</Descriptions.Item>
                            <br />
                            <br/>
                            <Descriptions.Item label="Telefon">+123456789</Descriptions.Item>
                            <Descriptions.Item label="E-Posta">epostaadresim@besiapp.com</Descriptions.Item>
                            <br />
                        </Descriptions>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertDetailPage
