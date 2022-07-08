import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineCheck, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Todo } from '../model';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (editText) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editText } : todo
        )
      );
      setEdit(false);
    }
  };

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="single__todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      <div className="icon checkbox" onClick={() => handleCompleted(todo.id)}>
        {todo.completed && <AiOutlineCheck color="#fff" size={12} />}
      </div>

      {edit ? (
        <input
          type="text"
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todo__text"
        />
      ) : todo.completed ? (
        <s className="todo__text">{todo.todo}</s>
      ) : (
        <span className="todo__text">{todo.todo}</span>
      )}

      <div
        className="icon"
        onClick={() => {
          if (!todo.completed && !edit) {
            setEdit(!edit);
          }
        }}
      >
        <AiFillEdit color="#8a919a" size={15} />
      </div>
      <div className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete color="#8a919a" size={15} />
      </div>
    </form>
  );
};

export default SingleTodo;
