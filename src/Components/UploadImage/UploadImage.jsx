import React, { Component } from "react";
import "../../Stylesheet/UploadImages.css";
import {Button} from 'antd'
export default class MultiFileUploadComponent extends Component {
  filesArray = [];
  FilesCollection = [];

  constructor(props) {
    super(props);

    this.state = {
      file: [null],
      showCaseImage:null
    };
    this.multiImagePreview = this.multiImagePreview.bind(this);
    this.imagePreview = this.imagePreview.bind(this);
  }

  multiImagePreview(event) {
    this.filesArray.push(event.target.files);
    for (let i = 0; i < this.filesArray[0].length; i++) {
      this.FilesCollection.push({showCase:false,data:URL.createObjectURL(this.filesArray[0][i])});
    }
    this.setState({ file: this.FilesCollection });
  }

  imagePreview(event) {
    event.preventDefault();
    console.log(this.state.file);
  }

  onHandleChangeShowCase(image){
    this.setState({
      showCase:image
    })
  }

  render() {
    return (
      <form className="upload-images-form">
        <div class="upload-btn-wrapper">
          <Button>Resim Yükle</Button>
          <input
            type="file"
            className="image-upload-input"
            onChange={this.multiImagePreview}
            multiple
          />
        </div>
        <div className="multi-preview">
          {(this.FilesCollection || []).map((res) => (
            <img onClick={() => {this.onHandleChangeShowCase(res)}} className="preview-image" src={res.data} alt="..." />
          ))}
        </div>
      </form>
    );
  }
}
