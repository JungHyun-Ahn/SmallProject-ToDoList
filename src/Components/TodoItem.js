// react
import React from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// -----------------------------------------------

const Container = styled.div`
  border-bottom: 1px solid #777;
  padding: 20px 1px !important;

  display: flex;
  align-items: center;
  gap: 10px;

  .check-col input[type="checkbox"] {
    display: none;

    &:checked + label {
      color: #02e5a5;
    }
  }
  .todo-col {
    flex: 1;
    color: #02e5a5;
  }
  .btn-col button {
    padding: 6px 10px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    background-color: #02e5a5;
    cursor: pointer;
  }
`;
// -----------------------------------------------

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const {id, isDone, content, createdDate} = item;

  const onUpdateTodo = () => {
    onUpdate(id);
  }

  const onDeleteTodo = () => {
    onDelete(id);
  }
  return (
    <Container>
      <div className="check-col">
        <input id={id} checked={isDone} type="checkbox" />
        <label onClick={onUpdateTodo} htmlFor={id}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </label>
      </div>
      <div className="todo-col">{content}</div>
      <div className="date-col">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn-col">
        <button onClick={onDeleteTodo}>삭제</button>
      </div>
    </Container>
  )
}

export default TodoItem
