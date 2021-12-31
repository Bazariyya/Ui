import React from "react";
import "../../Stylesheet/resetPassword.css";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import LogoAndName from '../LogoAndName/LogoAndName'


function ResetPassword() {
  
  

  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate('/login',{state:{sendLink:true}})
  };
  return (
    <div className="reset-password-component">
      <div className="authComponentTop">
        <LogoAndName white = {true} />
      </div>
      <div className="reset-password-form">
        <div className="josefinText form-top">
          <h3>Şifre Sıfırlama</h3>
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="reset-form"
        >
          <Form.Item
            label="Hesabınıza ait e-posta adresi"
            name="email"
            rules={[
              {
                required: true,
                message: "E-posta alanı zorunludur!",
              },
            ]}
          >
            <Input type={'email'} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;
