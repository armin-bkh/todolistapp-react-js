import { useState } from "react";
import styles from './TodoForm.module.scss';
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.todoForm} onSubmit={submitHandler}>
      <input className={styles.todoInput} type="text" value={todo} onChange={changeHandler} />
      <button type="submit" className={styles.todoInsertBtn}>insert</button>
    </form>
  );
};

export default TodoForm;
