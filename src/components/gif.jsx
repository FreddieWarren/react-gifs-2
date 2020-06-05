import React, { Component } from 'react';

class Gif extends Component {

  handleTheClick = () => {
    if (this.props.clickedGif) {
      this.props.clickedGif(this.props.id);
    }
  }

  render() {


    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleTheClick} />
      );
  }
}

export default Gif;


