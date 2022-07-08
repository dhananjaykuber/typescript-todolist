import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { AiFillHeart } from 'react-icons/ai';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const hanldeAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, completed: false }]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="container">
        <h1>TodoList.tsx</h1>
        <p>Todo List implemented using TypeScript and ReactJS</p>

        <InputField
          todo={todo}
          setTodo={setTodo}
          hanldeAddTodo={hanldeAddTodo}
        />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>

      <p className="footer">
        Made with&nbsp;
        <AiFillHeart color="red" size={14} />
        &nbsp;by&nbsp;
        <a href="https://twitter.com/dhananjaykuber_">@dhananjaykuber_</a>
      </p>
    </div>
  );
};

export default App;
