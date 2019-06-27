import _ from 'lodash';
import './index.less';
import readonly from './index.ts';
import arrayReadonly from './arrayReadonly.ts';
import otherPropsCheck from './otherPropsCheck.ts';
import $ from 'jquery';

const btnList = [readonly, arrayReadonly, otherPropsCheck];
const btnStyleList = [
  'button-raised',
  'button-caution',
  'button-3d',
  'button-action',
  'button-pill',
  'button-primary',
  'button-giant',
  'button-longshadow-right',
  'button-rounded',
  'button-plain',
  'button-small-caps',
  'button-border'
];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const getRandomItem = (btnStyleList, num) => {
  let str = '';
  for (let i = 1; i < num; i++) {
    const ran = getRandom(0, btnStyleList.length);
    console.log(ran);
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
