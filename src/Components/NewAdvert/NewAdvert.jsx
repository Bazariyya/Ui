import "../../Stylesheet/NewAdvert.css";
import { PageHeader, Collapse, Form, Button, message, Steps } from "antd";
import AdvertInfo from "./AdvertInfo";
import AdvertUploadImages from "./AdvertUploadImages";
import AdressDetail from "./AdressDetail";
import React from "react";
import SelectCategory from "./SelectCategory";
const { Panel } = Collapse;
const { Step } = Steps;
function NewAdvert() {


  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  function callback(key) { }

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("İlan Kaydedildi.")
    next()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Zorunlu alanları doldurun.");
  };

  const Step1 = () => (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel
          className="collapse-panel"
          header="İlan Kategorisi Seçin"
          key="1"
        >
          <SelectCategory />
        </Panel>
        <Panel
          className="collapse-panel"
          header="İlan Hakkında Bilgiler"
          key="2"
        >
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
      <br />
      <Form.Item>
        <Button htmlType="submit" type="primary">
          İlanı Kaydet
        </Button>
      </Form.Item>
    </Form>
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
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content" style={{ padding: '45px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>{steps[current].content}</div>
          <div className="steps-action">
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Tamamla
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAdvert;
