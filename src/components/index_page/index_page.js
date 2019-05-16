import React, {Component} from 'react';
import NewsList from '../news_list/news_list';
import Footer from '../footer/footer';
export default class Index_page extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <NewsList />
        <Footer />
      </div>
    );
  }
}
