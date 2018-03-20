import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import app from './TodoModel';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

const model = new app.TodoModel('growth-todos');

function init() {
  ReactDOM.render(<TodoList model={model} />, document.getElementById('root'));
}

model.subscribe(init);
init();
registerServiceWorker();
