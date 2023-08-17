// react
import { styled } from 'styled-components'
import { useState, useRef, useReducer } from 'react';

// components
import Header from './Components/Header';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';

// -----------------------------------------------

const Background = styled.div`
  box-sizing: border-box;
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: #222;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  * {
    margin: 0;
    padding: 0;
  }
  & > h1 {
    color: #02e5a5;
    font-size: 45px;
    letter-spacing: 4px;
  }
`;
const Container = styled.div`
  width: 420px;
  padding: 40px 30px;
  color: #fff;
  border: 1px solid #02e5a5;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

// -----------------------------------------------

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE" :
      return [action.newItem, ...state];
    case "UPDATE" :
      return (state.map((item) => (
        item.id === action.targetId? {...item, isDone: !item.isDone} : item 
      )));
    case "DELETE" :
      return (state.filter((item) => (
        item.id !== action.targetId
      )))
  }
}

function App() {
  const mockupData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createdDate: new Date().getTime()
    },
    {
      id: 1,
      isDone: false,
      content: "운동하기",
      createdDate: new Date().getTime()
    },
    {
      id: 2,
      isDone: false,
      content: "책 읽기",
      createdDate: new Date().getTime()
    }
  ];

  const [todo, dispatch] = useReducer(reducer, mockupData);

  // const [todo, setTodo] = useState(mockupData);
  let idRef = useRef(3);

  // todo 추가
  const onCreate = (content) => {
    // setTodo([
    //   {
    //     id: idRef.current,
    //     isDone: false,
    //     content: content,
    //     createdDate: new Date().getTime()
    //   },
    //   ...todo
    // ]);
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content: content,
        createdDate: new Date().getTime()
      }
    });
    idRef.current += 1;
  }

  // todo 체크
  const onUpdate = (targetId) => {
    // setTodo(todo.map((item) => (
    //   item.id === targetId? {...item, isDone: !item.isDone} : item 
    // )));
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }

  // todo 삭제
  const onDelete = (targetId) => {
    // setTodo(todo.filter((item) => (
    //   item.id !== targetId
    // )));
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }

  return (
    <Background>
      <h1>· * · TODO LIST · * ·</h1>
      <Container>
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </Container>
    </Background>
  );
}

export default App;
