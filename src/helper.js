import $ from 'jquery';

const helper = (btnList, btnStyleList) => {
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
          `<button class="button button-3d ${getRandomItem(
            btnStyleList,
            3
          )} btn-custom ${
            idx % 2 === 0 ? 'button-longshadow-left' : 'button-longshadow-right'
          }"><code>${el.name || 'typescript hh'}</code></button>`
        ).click(() => {
          $('#text .textarea').css({
            height: 0
          });
          setTimeout(() => {
            $('#text .textarea')
              .css({
                height: '80%'
              })
              .text(el.fn());
          }, 300);
        });
        $wrap.append($btn);
      });
    };
    window.rDom = document.querySelector('#text');
    renderDom();
  });
};

export default helper;
