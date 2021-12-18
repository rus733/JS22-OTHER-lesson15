'use strict';
// дз 15

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    if (this.selector[0] === '.') {
      const div = document.createElement('div');
      div.className = this.selector.slice(1);
      div.style.cssText = `height: ${this.height}; width: ${this.width}; 
      background:  ${this.bg}; font-size: ${this.fontSize};`;
      div.textContent = 'Блок созданный на основе класса .block';
      //второй вариант  ввода текста в элементы
      //div.textContent = prompt('Сюда можно ввести любой текст', ' Это Элемент1 с построенный на основе класса    ');
      document.body.append(div);
    } else if (this.selector[0] === '#') {
      const p = document.createElement('p');
      p.id = this.selector.slice(1);
      p.style.cssText = `height: ${this.height}; width: ${this.width};
      background: ${this.bg}; font-size: ${this.fontSize};`;
      p.textContent = 'Параграф созданный на основе #id';
      document.body.append(p);
    }
  };
};

const newElement1 = new DomElement('.block', '200px', '400px', 'red', '32px');
const newElement2 = new DomElement('#best', '200px', '400px', 'green', '32px');

newElement1.createElement();
newElement2.createElement();
