import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, onDelete, onCompleted, onEdit }) => {
  const [edit, setEdit] = useState({});

  const editHandler = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({});
  }

  const renderList = () => {
    return todos.length
      ? todos.map((todo) => {
        if(todo.id === edit.id){
            return <TodoForm onSubmit={editHandler} item={edit} />
        }
        else return (
          <TodoItem
            key={todo.id}
            value={todo.value}
            onEdit={() => setEdit(todo)}
            isCompleted={todo.isCompleted}
            onDelete={() => onDelete(todo.id)}
            onCompleted={() => onCompleted(todo.id)}
          />
        )})
      : null;
  };

  return <ul>{renderList()}</ul>;
};

export default TodoList;
