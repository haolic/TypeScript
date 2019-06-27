import _ from 'lodash';
import './index.less';
import readonly from './index.ts';
import arrayReadonly from './arrayReadonly.ts';
import otherPropsCheck from './otherPropsCheck.ts';
import otherPropsCheck1 from './otherPropsCheck.1.ts';
import interfaceFunction from './interfaceFunction.ts';
import interfaceFunction1 from './interfaceFunction.1.ts';
import indextype from './indextype.ts';
import $ from 'jquery';

const btnList = [
  readonly,
  arrayReadonly,
  otherPropsCheck,
  otherPropsCheck1,
  interfaceFunction,
  interfaceFunction1,
  indextype
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
      ).click(el.fn);
      $wrap.append($btn);
    });
  };
  renderDom();
});
