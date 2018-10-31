import React, {useContext} from 'react';
import classNames from 'classnames';
import {ActionsContext} from './todo-contexts';

const TodoItem = ({item}) => {

  const itemClasses = classNames({
    item: true,
    done: item.done
  });

  const checkboxClasses = classNames({
    checkbox: true,
    checked: item.done
  })

  const actions = useContext(ActionsContext);

  return <li className={itemClasses}>
    <span className="item-check" onClick={() => {
      actions.changeItem(item.id);
    }}>
      <span className={checkboxClasses} />
      <span className="item-name">{item.name}</span>
    </span>
    <span className="delete" onClick={() => {
      actions.deleteItem(item.id);
    }}></span>
  </li>;
}

export default TodoItem;