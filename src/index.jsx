/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

render(() => <App />, document.getElementById('root'));

const webp = e => document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;

if(!webp())
  document.body.classList.add('no-webp');