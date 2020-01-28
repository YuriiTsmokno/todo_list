import React from 'react';
import ReactDOM from 'react-dom';

//const elem = React.createElement('h1', null, 'Hello World!');
const elem = <h1>Hello World!</h1>
console.log(elem);

ReactDOM.render(elem, document.querySelector("#root"));