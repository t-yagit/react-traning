import React from 'react';
import ReactDOM from 'react-dom';

//App.jsを読み込む
import App from './App';

//index.htmlの#rootのdivタグ内に<div><div>App</div></div>が追加される。
ReactDOM.render(<App />, document.querySelector('#root'));