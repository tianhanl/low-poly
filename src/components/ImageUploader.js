import React from 'react';
import DropZone from './DropZone';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUrl: ''
    };
    this.reader = new FileReader();
    this.reader.onload = this.hanldeImageLoad;
  }

  handleDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    this.reader.readAsDataURL(files[0]);
  };

  hanldeImageLoad = e => {
    this.setState({
      dataUrl: e.target.result
    });
  };

  render() {
    const { dataUrl } = this.state;
    return (
      <div>
        <img
          style={{
            width: 200,
            height: 200
          }}
          src={dataUrl}
        />
        <DropZone handleDrop={this.handleDrop} />
      </div>
    );
  }
}

export default ImageUploader;
