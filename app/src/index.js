import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Article from "./components/Article"

const apis = document.querySelectorAll('div[data-js="api"]')
let api_params = []
apis.forEach(element => {
  api_params.push(element.getAttribute('data-api-js'))
});
(async () => {
  const response = await fetch(`http://localhost:3001/`, {mode: 'cors'})
  const r = await response.json()
  Object.keys(r).map((key)=>{
    console.log(key)
    const selecter = ReactDOM.createRoot(document.querySelector(`div[data-api-js=${key}]`));
    selecter.render(
      <React.StrictMode>
        <Article
         name={r[key].name}
         id={r[key].id}
        />
      </React.StrictMode>
    ); 
  })
})();
