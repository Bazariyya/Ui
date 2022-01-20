import {  Upload, Button, message  } from 'antd';
import {  UploadOutlined  } from '@ant-design/icons';
import React from 'react'
import { UPLOAD_IMAGE } from '../../Service/Endpoints';
class UploadImage extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });
    this.setState({
      uploading: true,
    });
    // You can use any AJAX library you like
    fetch(`https://bazariyya.com${UPLOAD_IMAGE}productId=${2}&isActive=true&isShowCase=true`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          fileList: [],
        });
        message.success('Resimler Yüklendi.');
      })
      .catch(() => {
        message.error('Resimler Yüklenemedi.');
      })
      .finally(() => {
        this.setState({
          uploading: false,
        });
      });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Resim Seç</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Kaydediliyor' : 'Resimleri Kaydet'}
        </Button>
      </>
    );
  }
}
export default UploadImage;