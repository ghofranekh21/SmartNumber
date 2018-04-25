import React , { Component }  from 'react';
import { render } from 'react-dom';
import SmartNumber from './SmartNumber';

class App extends Component {
  render = () => (
  <div>
  <h2> Number </h2>
  <SmartNumber/>
  </div>
);
}
render(<App />, document.getElementById('root'));
