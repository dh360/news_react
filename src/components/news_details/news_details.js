import React, {Component} from 'react';
import './news_details.scss';
import {PageHeader} from 'antd';
import {Link} from 'react-router-dom';

export default class News_page extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  /**
 * @returns
 * @memberof News_page
 */

  /**
   * @param {*} base64Str
   * @returns 最终请求文章的URL
   * @memberof News_page
   */

  parseUrl (str) {
    let lengeth = str.length;
    let url = str.substr (13, lengeth - 1);
    return url;
  }

  ConcatUrl (url) {
    let news_url = this.parseUrl (url);
    let base_url = `http://news.leomeo.cn/api/getData/?url=`;
    const final_url = `${base_url}${news_url}`;
    return final_url;
  }

  render () {
    return (
      <div className="news_details">
        <Link to="/">
          <PageHeader onBack={() => null} />
        </Link>

        <iframe
          style={{border: 0, width: '100%', height: 630}}
          title="sdd"
          scrolling="yes"
          src={this.ConcatUrl (this.props.location.pathname)}
          frameBorder="1"
        />
      </div>
    );
  }
}
