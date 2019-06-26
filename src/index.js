import _ from "lodash";
import "./index.less";
import readonly from "./index.ts";
import arrayReadonly from "./arrayReadonly.ts";
import otherPropsCheck from "./otherPropsCheck.ts";

const btnList = [readonly, arrayReadonly, otherPropsCheck];
function component(btnInfo) {
  const element = document.createElement("div");
  element.classList.add('wrap')
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "typescript"], " ");
  btn.innerHTML = btnInfo.name;
  btn.classList.add("btn");
  btn.onclick = () => {
    btnInfo.fn();
  };
  element.appendChild(btn);
  return element;
}
btnList.forEach(el => {
  document.body.appendChild(component(el));
});
