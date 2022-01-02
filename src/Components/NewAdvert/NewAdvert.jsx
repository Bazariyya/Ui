import React, { useEffect, useState } from "react";
import "../../Stylesheet/NewAdvert.css";
import { Steps, Button, message, PageHeader, Form } from "antd";
import { useNavigate } from "react-router-dom";
import SelectCategoryStep from "./SelectCategoryStep";
import { useDispatch, useSelector } from "react-redux";
import AdvertDetail from './AdvertDetail';
import AdvertAdressDetail from './AdvertAdressDetail';
import BeforePublishing from './BeforePublishing';

function NewAdvert() {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const steps = [
    {
      title: "İlan Kategorisi",
      content: <SelectCategoryStep handle={onSelectedCategoryEvent} />,
    },
    {
      title: "İlan Bilgileri",
      content: <AdvertDetail handle={stepControl} />,
    },
    {
      title: "Adres Bilgileri",
      content: <AdvertAdressDetail handle = {stepControl} />,
    },
    {
      title: "Yayınlamadan Önce",
      content:<BeforePublishing handle = {stepControl} />,
    },
  ];

  async function stepControl(values = null) {
    switch (current) {
      case 0:
        if (isSelectedCategory === true) {
          next();
        }
        else {
          message.error("İlanınız için bir kategori seçin.");
        }
        break;

      case 1:
        try{
          const values = await form.validateFields(['title', 'description', 'price', 'age', 'bulkSale', 'weight'])
          next();
        }catch(error){
          message.error('Zorunlu alanları doldurun')
        }
        break;

      case 2:
        try{
          const values = await form.validateFields(['il','ilce','adresTanimi'])
          console.log(values)
          next();
        }catch(error){
          message.error('Zorunlu alanları doldurun')
        }
        break;


      default:
        break;
    }
  }

  function onSelectedCategoryEvent() {
    setIsSelectedCategory(true);
  }

  return (
    <Form
      layout={'vertical'}
      form={form}
      onFinish={stepControl}
      autoComplete="off"
    >
      <div className="new-advert-component">
        <div className="new-advert-form">
          <PageHeader
            className="site-page-header"
            onBack={() => navigate('/')}
            title="Anasayfa'ya Dön"
            subTitle="İlan oluşturmayı iptal et."
          />
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>

          <div className="steps-action">
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Önceki
              </Button>
            )}
            {current < steps.length - 1 && (

              current === 1 ? <Button htmlType="submit" type="primary" onClick={() => stepControl()}>
                Sonraki
              </Button> : <Button type="primary" onClick={() => stepControl()}>
                Sonraki
              </Button>

            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                İlanı Yayınla
              </Button>
            )}
          </div>
        </div>
      </div >
    </Form>
  );
}

export default NewAdvert;
