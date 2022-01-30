import React, { useEffect, useState } from 'react';
import { Upload,message } from 'antd';
import ImgCrop from 'antd-img-crop';

const UploadImage = ({productId}) => {
  const [fileList, setFileList] = useState([
    
  ]);


  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    const upload = new Promise(() => {
      if(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
        message.success("Dosya yüklendi.")
      }
      else{
        message.error("Dosya formatı geçersiz.Yükleme başarısız")
        file = null;
      }
    })
    
    return upload;
  }

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotate>
      <Upload
        action={`https://bazariyya.com/api/Product/upload-product-image?productId=${productId}&isActive=true`}
        progress
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length < 15 && 'Resim Yükle'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImage;