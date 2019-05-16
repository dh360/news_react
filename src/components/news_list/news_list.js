import React, {Component} from 'react';
import Item from '../news_item/news_item';
import './news_list.scss';
import 'antd/dist/antd.css';
import axios from 'axios';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class News_list extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tags: ['头条', '娱乐', '社会', '国内', '国际', '体育', '军事', '科技', '财经', '时尚'],
      activeKey: '头条',
      tagName: 'toutiao',
      newsData: {
        toutiao: [],
        yule: [],
        shehui: [],
        guonei: [],
        guoji: [],
        tiyu: [],
        junshi: [],
        keji: [],
        caijing: [],
        shishang: [],
      },
    };
  }

  /**
         *请求列表的新闻数据
         * @returns
         * @memberof News_list
         */
  getNewListData (type) {
    type = this.hanzi2Pinyin (type);
    type = type || 'toutiao';
    if (this.state.newsData[type] && this.state.newsData[type].length <= 0) {
      const url = `http://news.leomeo.cn/api/getNewsItemData?type=${type}`;
      axios
        .get (url)
        .then (data => {
          if (data.status === 200) {
            let cgangedData = this.state.newsData;
            cgangedData[type] = data.data.result.data;

            this.setState ({
              newsData: cgangedData,
            });
          }
        })
        .catch ();
    }
  }

  /**
         * 实现汉字转换成拼音
         */
  hanzi2Pinyin (zi) {
    let type = '';
    switch (zi) {
      case '娱乐':
        type = 'yule';
        break;
      case '社会':
        type = 'shehui';
        break;
      case '国内':
        type = 'guonei';
        break;
      case '国际':
        type = 'guoji';
        break;
      case '体育':
        type = 'tiyu';
        break;
      case '军事':
        type = 'junshi';
        break;
      case '科技':
        type = 'keji';
        break;
      case '财经':
        type = 'caijing';
        break;
      case '时尚':
        type = 'shishang';
        break;
      default:
        type = 'toutiao';
        break;
    }
    return type;
  }

  /**
         * 挂载之前请求 新闻列表数据
         */
  componentWillMount () {
    this.getNewListData (this.state.activeKey);
  }

  /**
         * 点击 tabs 时触发的事件
         *@param name   切换后的名字
         * @memberof News_list
         */
  onChange = name => {
    this.getNewListData (name);
    this.setState ((state, props) => {
      return {
        activeKey: name,
        tagName: this.hanzi2Pinyin (name),
      };
    });
  };

  render () {
    //返回一条一条的 新闻列表项 （news_item 组件）

    let type = this.hanzi2Pinyin (this.state.activeKey);

    let arr = this.state.newsData[type];

    //这里返回每一条 item 组件
    const news_components_arr = arr.map ((item, index) => {
      return arr.length > 0
        ? <Item key={item.url} msg={item} tagName={this.state.tagName} />
        : <div />;
    });

    return (
      <div className="news_list">
        <Tabs activeKey={this.state.activeKey} onTabClick={this.onChange}>

          {this.state.tags.map ((item, index) => {
            return (
              <TabPane tab={item} key={item}> {news_components_arr}</TabPane>
            );
          })}

        </Tabs>{' '}
      </div>
    );
  }
}
