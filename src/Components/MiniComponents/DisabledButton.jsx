import { Button, Spin } from "antd";
import React from "react";

function DisabledButton({buttonLoading,loadingIcon}) {
  return (
    <Button disabled type="primary" htmlType="submit">
      {buttonLoading === false ? "Devam Et" : <Spin indicator={loadingIcon} />}
    </Button>
  );
}

export default DisabledButton;
