import React, { Component } from 'react';

export default class Widget extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>WP Reactivate Widget</h1>
        <p>Title: {wpr_object.title}</p>
      </div>
    );
  }
}
