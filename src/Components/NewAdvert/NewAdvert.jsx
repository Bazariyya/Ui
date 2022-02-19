import "../../Stylesheet/NewAdvert.css";
import {
  PageHeader,
  Collapse,
  Form,
  Button,
  message,
  Steps,
  Modal,
} from "antd";
import AdvertInfo from "./AdvertInfo";
import AdvertUploadImages from "./AdvertUploadImages";
import AdressDetail from "./AdressDetail";
import React, { useEffect, useState } from "react";
import SelectCategory from "./SelectCategory";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewAdvertLastStep from "./NewAdvertLastStep";
const { Panel } = Collapse;
const { Step } = Steps;
function NewAdvert() {
  const [current, setCurrent] = React.useState(0);

  const [savedProductId,setSavedProductId]= useState(null);

  const service = useSelector(state => state.service);
  const productService = service[0];
  const definition = useSelector(state => state.definition)

  const ageDefinition = definition ? definition[3]:null;
  const descriptionDef = definition ? definition[6]:null;
  const isMassSale = definition ? definition[1]:null;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  function callback(key) {}

  const onFinish = (values) => {
    console.log("Success:", values);
    if(current === 1)  {
      next();
    }
    const {
      adress,
      age,
      bulksale,
      category,
      city,
      description,
      district,
      email,
      nameSurname,
      phone,
      price,
      title,
      type,
      weight
    } = values;
    const product = {
      name: title,
      categoryId: category[0],
      price: parseInt(price),
      externalId: "string",
      code: "MorDana",
      barcodes: "string",
      imagePath: "string",
      hash: "string",
      directSupplyId: 0,
      styleCode: "string",
      season: "string",
      colorCode: "kırmızı",
      sizeDefinition: "string",
      division: "string",
      userId: 1,
      divisionId: 0,
      subDivision: "string",
      subDivisionId: 0,
      isActive: true,
      address:{
        cityId:city,
        districtId:district,
        addressText:adress,
        addressName:adress,
        countryId:2
      },
      productAttributes:[
        {
          productAttributeDefinitionId:ageDefinition.id,
          value:age
        },
        {
          productAttributeDefinitionId:isMassSale.id,
          value:bulksale
        },{
          productAttributeDefinitionId:descriptionDef.id,
          value:description
        }
      ]

    }

    productService.addProduct(product).then(res => {
      message.success("İlan Kaydedildi.");
      setSavedProductId(res.value);
      console.log(res);
     
    }).catch(err => {
      message.error("İlan Kaydedilemedi.")
      console.log(err)
    })

   
  };

  useEffect(() => {
    if(savedProductId > 0) {
      next();
    }
  },[savedProductId])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Zorunlu alanları doldurun.");
  };

  const Step1 = () => (
    <Collapse defaultActiveKey={["1","2","3"]} onChange={callback}>
      <Panel className="collapse-panel" header="İlan Kategorisi Seçin" key="1">
        <SelectCategory />
      </Panel>
      <Panel className="collapse-panel" header="İlan Hakkında Bilgiler" key="2">
        <AdvertInfo />
      </Panel>
      <Panel
        className=
        "collapse-panel"
        header="Satıcı Hakkında Bilgiler"
        key="3"
      >
        <AdressDetail />
      </Panel>
    </Collapse>
  );

  const steps = [
    {
      title: "İlan Hakkında",
      content: <Step1 />,
    },
    {
      title: "İlan Görselleri",
      content: <AdvertUploadImages productId = {savedProductId} />,
    },
    {
      title: "Tamamla",
      content: <NewAdvertLastStep productId = {savedProductId} />,
    },
  ];

  return (
    <div className="new-advert-component">
      <div className="new-advert-section">
        <div className="advert-section-top">
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Geri Dön"
            subTitle="İşlemleri iptal edin."
          />
        </div>
        <div className="new-advert-center">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div
              className="steps-content"
              style={{
                padding: "45px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {steps[current]?.content}
            </div>
            <div className="steps-action">
              <div className="steps-action">
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                    Geri
                  </Button>
                )}
                {
                  current !== 2 ? <Button style={{float:'right'}} htmlType="submit" type="primary">
                  Devam
                </Button> : <Button style={{float:'right'}}  type="primary">
                  <Link to={`/advertDetail/${savedProductId}`}>İlanı Görüntüle</Link>
                </Button>
                }
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewAdvert;
