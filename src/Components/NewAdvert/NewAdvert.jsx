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
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const { Step } = Steps;
const { confirm } = Modal;
function NewAdvert() {
  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [stepState, setStepState] = useState(null);

  function callback(key) {}

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("İlan Kaydedildi.");
    next();
  };

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
        className="collapse-panel"
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
      content: <AdvertUploadImages />,
    },
    {
      title: "Tamamla",
      content: "Last-content",
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
              {steps[current].content}
            </div>
            <div className="steps-action">
              <div className="steps-action">
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                    Geri
                  </Button>
                )}
                <Button style={{float:'right'}} htmlType="submit" type="primary">
                  Devam
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewAdvert;
