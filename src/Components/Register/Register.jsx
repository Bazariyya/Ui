import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import React, { useState } from "react";
import "../../Stylesheet/Register.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import DisabledButton from "../MiniComponents/DisabledButton";
import { User } from "../../Entities/User";
import LogoAndName from "../LogoAndName/LogoAndName";
function Register({ service }) {
  const navigate = useNavigate();
  const [checked,setChecked] = useState(false);
  const antIcon = (
    <LoadingOutlined color="light" style={{ fontSize: 24 }} spin />
  );
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSendRegisterRequest = (values) => {
    setButtonLoading(true);
    if(checked === false) {
      message.error("Devam etmek için sözleşmeyi kabul edin.");
      setButtonLoading(false);
      return ;
    }
    const { firstName, lastName, email, password } = values;

    const user = new User();
    user.allProperties(firstName, lastName, email, password);
    service.registerEvent(user).then(res => {
        setTimeout(() => {
          setButtonLoading(false);
          navigate("/login", { state: {isNew:true} });
        }, 2500);  
    }).catch(err => {
      message.error('Bir hata oluştu.');
    }).finally(() => {
      setButtonLoading(false)
    })
    
  };


  const onHandleChangeCheckbox = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <div className="register-component">
      <div className="authComponentTop">
        <LogoAndName white = {true} />
      </div>
      <div className="register-form">
        <div className="form-top">
          <h2 className="josefinText form-header">Üye Ol</h2>
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
            <div className="nameSurname">
              <Form.Item
                label="Ad"
                className="GlobalFormItem"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Ad zorunludur.",
                  },
                ]}
              >
                <Input type={"text"} />
              </Form.Item>
              <Form.Item
                label="Soyad"
                name="lastName"
                className="GlobalFormItem"
                style={{ marginLeft: "5px" }}
                rules={[
                  {
                    required: true,
                    message: "Soyad zorunludur.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="E-Posta"
              name="email"
              className="GlobalFormItem"
              rules={[
                {
                  required: true,
                  message: "E-posta zorunludur.",
                },
              ]}
            >
              <Input type={"email"} />
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
                {
                  min: 6,
                  message: "Şifre en az 6 karakterli olmalıdır.",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              className="GlobalFormItem"
              rules={[
                {
                  required: true,
                  message: "Sözleşmeyi kabul etmek zorunludur",
                }
              ]}
            >
              <Checkbox onChange={onHandleChangeCheckbox}>
                Bireysel Üyelik Sözleşmesi ve Ekleri'ni kabul ediyorum.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              {buttonLoading === true ? (
                <DisabledButton />
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "250px" }}
                  size="large"
                >
                  {buttonLoading === false ? (
                    "Üye Ol"
                  ) : (
                    <Spin indicator={antIcon} />
                  )}
                </Button>
              )}
            </Form.Item>
            <div className="not-have-account">
              <b>Zaten Üye misin?</b>{" "}
              <Link className="link" to="/login">
                Giriş Yap
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
