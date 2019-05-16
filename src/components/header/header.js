import React, {Component} from 'react';
import './header.scss';

export default class header extends Component {
  render () {
    return (
      <div>
        <div className="header">
          <div className="title">
            <span className="logo" />
            &nbsp;番茄新闻
          </div>
        </div>
      </div>
    );
  }
}
