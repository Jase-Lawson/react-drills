import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <div>WOW</div>
      </div>
    );
  }
}
export default Image;