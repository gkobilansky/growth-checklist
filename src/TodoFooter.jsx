import React, { Component } from 'react';
import Utils from './utils';
import classNames from '../node_modules/classnames/index.js';

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

class TodoFooter extends Component {
  render() {
    let activeTodoWord = Utils.pluralize(this.props.count, 'item');
    let clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear Completed
        </button>
      );
    }

    let nowShowing = this.props.nowShowing;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({ selected: nowShowing === ALL_TODOS })}>
              All
            </a>
          </li>{' '}
          <li>
            <a
              href="#/active"
              className={classNames({ selected: nowShowing === ACTIVE_TODOS })}>
              Active
            </a>
          </li>{' '}
          <li>
            <a
              href="#/completed"
              className={classNames({
                selected: nowShowing === COMPLETED_TODOS
              })}>
              Completed
            </a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
}

export default TodoFooter;
