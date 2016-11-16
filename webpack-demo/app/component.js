module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello world';
  
  var element2 = document.createElement('p');
 
  element2.innerHTML = "你好";

  element.appendChild(element2);

  var styles = require('./main.css');

  element.className = styles.redButton;

  return element;
};

 