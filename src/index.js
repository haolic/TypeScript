import _ from 'lodash';
import './index.ts';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console2222!';
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
