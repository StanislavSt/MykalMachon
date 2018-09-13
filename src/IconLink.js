import React, { Component } from 'react';

export default class IconLink extends Component {
  render() {
    const { icon, size, link } = this.props;
    return (
      <a href={`${link}`} target="_blank">
        <i className={`fab fa-${icon} fa-${size}`} />
      </a>
    );
  }
}
