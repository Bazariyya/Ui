import { Alert } from 'antd';
import React from 'react';
import UploadImage from '../UploadImage/UploadImage'
function AdvertUploadImages({productId}) {
  return <div className = "advert-upload-images-component">
    <Alert message = "Yüklemek istediğiniz ilan görsellerini seçin ve ardından yükleme işlemini başlatın" type='info'></Alert>
    <br/>
    <Alert message = "Oluşturduğunuz ilana ait en az 1, en fazla 15 görsel bulunmak zorundadır." type='warning'></Alert>
    <br/>
    <div className='upload-image-button'>
      <UploadImage productId = {productId} />
    </div>
  </div>;
}

export default AdvertUploadImages;
