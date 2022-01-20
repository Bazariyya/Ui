import { Alert } from 'antd';
import React from 'react';
import UploadImage from '../UploadImage/UploadImage'
function AdvertUploadImages() {
  return <div>
    <Alert message = "Yüklemek istediğiniz ilan görsellerini seçin ve ardından yükleme işlemini başlatın" type='info'></Alert>
    <br/>
    <Alert message = "Oluşturduğunuz ilana ait en az 1 görsel bulunmak zorundadır." type='warning'></Alert>
    <br/>
    <UploadImage />
  </div>;
}

export default AdvertUploadImages;
