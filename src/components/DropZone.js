import React, { Component } from 'react';

export default class DropZone extends Component {
  onDragEnter = e => {
    const { handleDragStart } = this.props;
    e.stopPropagation();
    e.preventDefault();
    handleDragStart && handleDragStart(e);
  };

  onDragOver = e => {
    const { handleDragOver } = this.props;
    e.stopPropagation();
    e.preventDefault();
    handleDragOver && handleDragOver(e);
  };

  onDrop = e => {
    const { handleDrop } = this.props;
    e.stopPropagation();
    e.stopPropagation();
    handleDrop && handleDrop(e);
  };

  render() {
    return (
      <div
        className="drop-zone"
        style={{
          outline: '2px solid black',
          width: '200px',
          height: '200px'
        }}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      />
    );
  }
}
