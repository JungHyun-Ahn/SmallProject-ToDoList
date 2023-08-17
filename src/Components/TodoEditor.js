// react
import React from 'react'
import { useState, useRef } from 'react';
import { styled } from 'styled-components'

// -----------------------------------------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputBox = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 12px 1px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    border-radius: 3px;
    background-color: transparent;
    &:focus {
      outline: none;
      border-bottom: 1px solid #02e5a5;
    }
    &::placeholder {
      color: #aaa;
    }
  }
  button {
    padding: 0 15px;
    border: none;
    border-radius: 3px;
    background-color: #02e5a5;
    font-weight: bold;
    font-size: 16px;
  }
`;

// -----------------------------------------------

const TodoEditor = ({ onCreate }) => {

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onClickCreate = () => {
    if(content === "") {
      inputRef.current.focus();
    } else {
      onCreate(content);
      setContent("");
    }
  }
  const onEnterCreate = (e) => {
    if(e.keyCode === 13) {
      onClickCreate();
    }
  }

  return (
    <Container>
      <h3>새로운 Todo 작성 🍀</h3>
      <InputBox>
        <input ref={inputRef} value={content} onChange={(e) => setContent(e.target.value)} onKeyDown={(e) => onEnterCreate(e)} type='text' placeholder='새로운 Todo...' />
        <button onClick={onClickCreate}>추가</button>
      </InputBox>
    </Container>
  )
}

export default TodoEditor
