import { Alert, Button, Form, Input, message, Spin } from "antd";
import React, { useState } from "react";
import "../../Stylesheet/Login.css";
import { LoadingOutlined } from "@ant-design/icons";
import DisabledButton from "../MiniComponents/DisabledButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {User} from '../../Entities/User'
import LogoAndName from "../LogoAndName/LogoAndName";
function Login({ service }) {
  const antIcon = (
    <LoadingOutlined color="light" style={{ fontSize: 24 }} spin />
  );
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSendRegisterRequest = (values) => {
    setButtonLoading(true);

    const {email,password} = values;
    const user = new User();
    user.twoParameter(email,password);
    service.loginEvent(user);


    setTimeout(() => {
      setButtonLoading(false);
      message.success("Oturum Açıldı");
    }, 2500);
  };
  return (
    <div className="login-component">
      <div className="authComponentTop">
          <LogoAndName white = {true} />
      </div>
      <div className="login-form">
        <div className="form-top">
          <h2 className="josefinText form-header">Üye Girişi</h2>
          {location.state?.isNew === true ? (
            <Alert
              showIcon
              message="Hesabınız oluşturuldu.Şimdi giriş yapın."
              type="success"
            />
          ) : null}
          {
            location.state?.sendLink === true ? (
              <Alert showIcon message="Şifre sıfırlama linki gönderildi." type="success" />
            ) :null
          }
        </div>

        <div className="form-section">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSendRegisterRequest}
            autoComplete="off"
            layout="vertical"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Item
              label="E-Posta"
              name="email"
              className="GlobalFormItem"
              rules={[
                {
                  required: true,
                  message: "E-Posta zorunludur.",
                },
              ]}
            >
              <Input type = {'email'} />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              className="GlobalFormItem"
              rules={[
                {
                  required: true,
                  message: "Şifre zorunludur",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <span className="reset-password-link">
              <Link className="link" to="/reset-password">
                Şifremi Unuttum
              </Link>
            </span>
            <Form.Item style={{marginTop:'20px'}}>
              {buttonLoading === true ? (
                <DisabledButton
                  loadingIcon={antIcon}
                  buttonLoading={buttonLoading}
                />
              ) : (
                <Button type="primary" size="large" style={{width:"250px"}} htmlType="submit">
                  {buttonLoading === false ? (
                    "Giriş Yap"
                  ) : (
                    <Spin indicator={antIcon} />
                  )}
                </Button>
              )}
              
            </Form.Item>
            
            <div className="not-have-account">
              <b>Henüz üye değil misin?</b> <Link className="link" to = '/register'>Üye Ol</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
