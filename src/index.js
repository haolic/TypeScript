import _ from 'lodash';
import './index.less';
import $ from 'jquery';
import readonly from './index.ts';
import arrayReadonly from './arrayReadonly.ts';
import otherPropsCheck from './otherPropsCheck.ts';
import otherPropsCheck1 from './otherPropsCheck.1.ts';
import interfaceFunction from './interfaceFunction.ts';
import interfaceFunction1 from './interfaceFunction.1.ts';
import indextype from './indextype.ts';
import interfaceClass from './interfaceClass';
import interfaceClassStatic from './interfaceClassStatic';
import interfaceExtends from './interfaceExtends';
import classExtends from './classExtends';
import classExtends1 from './classExtends1';

const btnList = [
  readonly,
  arrayReadonly,
  otherPropsCheck,
  otherPropsCheck1,
  interfaceFunction,
  interfaceFunction1,
  indextype,
  interfaceClass,
  interfaceClassStatic,
  interfaceExtends,
  classExtends,
  classExtends1
];
const btnStyleList = [
  'button-3d',
  'button-action',
  'button-pill',
  // 'button-giant',
  'button-longshadow-right',
  'button-longshadow-left'
];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const getRandomItem = (btnStyleList, num) => {
  let str = '';
  for (let i = 1; i < num; i++) {
    const ran = getRandom(0, btnStyleList.length);
    str += ` ${btnStyleList[ran]}`;
  }
  return str;
};
$(function() {
  const renderDom = () => {
    const $wrap = $('#app');
    btnList.forEach((el, idx) => {
      const $btn = $(
        `<button class="button ${getRandomItem(
          btnStyleList,
          3
        )} btn-custom">${el.name || 'typescript hh'}</button>`
      ).click(() => {
        $('#text').html('');
        $('#text').html(`<textarea class="textarea" readonly>${el.fn()}</textarea>`);
      });
      $wrap.append($btn);
    });
  };
  window.rDom = document.querySelector('#text');
  renderDom();
});
