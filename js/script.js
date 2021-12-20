'use strict';
// дз 15

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
  const newElement = this.newElement;

  this.createElement = () => {
    let elementType;
    if (this.selector[0] === '.') {
      elementType = 'div';
    } else if (this.selector[0] === '#') {
      elementType = 'p';
    }
    this.newElement = document.createElement(elementType);
    this.newElement.classList.add(this.selector);
    this.newElement.style.cssText = `height: ${this.height}; width: ${this.width};
     background: ${this.bg}; font-size: ${this.fontSize};`;
    this.newElement.textContent = this.text;
    document.body.append(this.newElement);
  };
};

const newElement1 = new DomElement('.block', '100px', '400px', 'red', '32px', 'Это Блок с классом "');
const newElement2 = new DomElement('#best', '100px', '400px', 'green', '32px', 'Это параграф с id');

newElement1.createElement();
newElement2.createElement();
