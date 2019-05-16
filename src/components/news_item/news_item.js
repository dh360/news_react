import React, {Component} from 'react';
import './news_item.scss';
import {Link} from 'react-router-dom';
export default class New_item extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: this.props.msg,
      tagName: `http://news.leomeo.cn/image/${this.props.tagName}.png`,
      category: {
        头条: 'hot',
        社会: 'social',
        国内: 'china',
        娱乐: 'fun',
        体育: 'sports',
        军事: 'army',
        科技: 'tech',
        财经: 'money',
        国际: 'international',
        时尚: 'fashion',
      },
      url: '../../images/china.png',
    };
  }

  checkOutTag (category) {
    let kind = this.state.category;
    if (kind) {
      return kind[category];
    }
  }

  /**
     * @param {*} category
     * @returns 图片路径
     * @memberof New_item
     */
  getTagUrl (category) {
    console.log ('图片 标签的种类是：：：', category);
    let baseUrl = `http://news.leomeo.cn/image/`;
    let name = this.checkOutTag (category);
    let extName = '.png';
    let finalUrl = `${baseUrl}${name}${extName}`;
    return finalUrl;
  }

  render () {
    return (
      <Link to={`news_detail/${this.state.data.url}`}>
        <div className="new_item" onClick={this.getNewsPage}>
          <div className="innerBox">
            {/* this.state.data.thumbnail_pic_s*/}

            <img
              alt="新闻封面"
              text="新闻封面"
              className="new_cover"
              src={'http://news.leomeo.cn/image/placeholder.png'}
              data-src="hello world"
            />

            <div className="new_info">
              <p className="new_title">
                {this.state.data.title}
              </p>
              <p className="other">
                <img className="tag_img" src={this.state.tagName} alt="" />
                <span className="tag_name"> {this.state.data.category}</span>
                <span className="new_time">{this.state.data.date}</span>
              </p>
            </div>

          </div>
        </div>
      </Link>
    );
  }
}
