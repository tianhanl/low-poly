import React, { Component } from 'react';
import ImageUploader from './components/ImageUploader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { length: 0 };
  }
  render() {
    return (
      <div className="App">
        <ImageUploader />
      </div>
    );
  }
}

export default App;
