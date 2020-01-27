import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props.opacity)
    const newValue = this.props.opacity - 0.1;
    return (
    //   this.props.opacity * 10 < 2 ? null : (
      <div className="color-box" style={{ opacity: this.props.opacity} }>
        {newValue <= 0.1 ? null : <ColorBox opacity={newValue} />}
      </div>
    // )
    )
  }

}

