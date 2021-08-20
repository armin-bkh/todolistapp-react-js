import { useEffect, useRef, useState } from "react";
import { BiCheck } from "react-icons/bi";
import styles from './TodoForm.module.scss';

const TodoForm = ({ onSubmit, item }) => {
  const [todo, setTodo] = useState(item ? item.value : '');
  const [holder, setHolder] = useState(true);
  const inputRef = useRef();

  useEffect(()=> {
    inputRef.current.focus();
  }, [])

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if(todo) {
      onSubmit(todo)
      setTodo('')
      setHolder(true)
    } else setHolder(false)

  };
  return (
    <form className={styles.todoForm} onSubmit={submitHandler}>
      <input className={styles.todoInput} ref={inputRef} type="text" placeholder={holder ? 'write to do' : 'you must write what do you want to do'} value={todo} onChange={changeHandler} />
      <button type="submit" className={item ? styles.checkBtn : styles.todoInsertBtn}>{item ? <BiCheck /> : "insert"}</button>
    </form>
  );
};

export default TodoForm;
