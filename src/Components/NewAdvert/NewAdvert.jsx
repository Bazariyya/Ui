import React, { useEffect, useState } from "react";
import "../../Stylesheet/NewAdvert.css";
import { Steps, Button, message, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import SelectCategoryStep from "./SelectCategoryStep";
import { useDispatch, useSelector } from "react-redux";

function NewAdvert() {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const steps = [
    {
      title: "İlan Kategorisi",
      content: <SelectCategoryStep />,
    },
    {
      title: "İlan Bilgileri",
      content: "Second-content",
    },
    {
      title: "Adres Bilgiler",
      content: "Last-content",
    },
    {
      title: "Yayınlamadan Önce",
      content: "",
    },
  ];

  return (
    <div className="new-advert-component">
      <div className="new-advert-form">
        <PageHeader
          className="site-page-header"
          onBack={() => null}
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
            <Button type="primary" onClick={() => next()}>
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
    </div>
  );
}

export default NewAdvert;
