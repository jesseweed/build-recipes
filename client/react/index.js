import React             from 'react';
import ReactDOM          from 'react-dom';
import { MainComponent } from './main-component.jsx';

window.addEventListener('load', function () {

  const root = document.querySelector('sample-app');

  ReactDOM.render(<MainComponent />, root);

});
