import { h, render } from 'preact';
import { MainComponent } from './main-component.jsx';

window.addEventListener('load', function () {

  const root = document.querySelector('sample-app');

  render(<MainComponent />, root);


});
