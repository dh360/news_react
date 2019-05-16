import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import './common/reset.scss';
import 'antd/dist/antd.css';
import Header from './components/header/header';
import IndexPage from './components/index_page/index_page';
import NewsDateil from './components/news_details/news_details';
import {HashRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={IndexPage} />
          <Route path="/news_detail/:url" component={NewsDateil} />
        </div>

      </Router>
    );
  }
}
ReactDOM.render (<App />, document.getElementById ('root'));
