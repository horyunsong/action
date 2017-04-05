import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {  BrowserRouter as Router, Route} from 'react-router-dom';

import Book from './page/book';

function scrollTop () {
  window.scrollTo(0,0)
}

ReactDOM.render(
  <Router onUpdate={scrollTop}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/book" component={Book}/>
    </div>
  </Router>,

  document.getElementById('root')
);
