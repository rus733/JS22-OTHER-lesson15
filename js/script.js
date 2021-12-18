'use strict';
// дз 15

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    //console.log(selector[0]);
    if (this.selector[0] === '.') {
      const div = document.createElement('div');
      //console.log(this.selector.slice(1));
      div.className = this.selector.slice(1);
      div.style.cssText = `height: ${this.height};
    width: ${this.width};
    background:  ${this.bg};
    font-size: ${this.fontSize};
  `;
      document.body.append(div);
    }
  };
};

const newElement1 = new DomElement('.class', '100px', '200px', 'red', '16px');

newElement1.createElement();
