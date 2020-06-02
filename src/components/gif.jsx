import React, { Component } from 'react';

class Gif extends Component {

  handleTheClick = () => {
    console.log(this.props.id);
    // this.props.clickedGif(click.currentTarget)
    // this.props.clickedGif()

  }

  render() {

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleTheClick} />
      );
  }
}

export default Gif;


