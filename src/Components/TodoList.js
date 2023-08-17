// react
import React from 'react'
import { useState } from 'react';
import { styled } from 'styled-components'

//Components
import TodoItem from './TodoItem';

// -----------------------------------------------

const Container = styled.div`
  color: #fff;
  input {
    padding: 12px 1px;
    width: 100%;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    &:focus {
      outline: none;
      border-bottom: 1px solid #02e5a5;
    }
  }
`;
// -----------------------------------------------

const TodoList = ({ todo, onUpdate, onDelete }) => {

  const [keyword, setKeyword] = useState("");

  const onGetKeyword = (e) => {
    setKeyword(e.target.value);
  }
  const onSearch = () => {
    return todo.filter((item) => (item.content.toLowerCase().includes(keyword.toLowerCase())));
  }

  return (
    <Container>
      <h3>Todo List 🍀</h3>
      <input value={keyword} onChange={onGetKeyword} type='text' placeholder='search' />
      {
        onSearch().map((item) => (
          <TodoItem key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete} />
        ))
      }
    </Container>
  )
}

export default TodoList
