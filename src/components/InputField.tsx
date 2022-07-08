import React from 'react';
import { MdOutlineSort } from 'react-icons/md';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  hanldeAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, hanldeAddTodo }) => {
  return (
    <form className="input" onSubmit={(e) => hanldeAddTodo(e)}>
      <input
        type="text"
        placeholder="Add a task..."
        className="input__field"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        <MdOutlineSort />
      </button>
    </form>
  );
};

export default InputField;
