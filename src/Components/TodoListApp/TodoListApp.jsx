import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList"
import styles from './TodoListApp.module.scss';
const TodoListApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        console.log(todos);
    }, [todos])

    const addTodoHandler = (todo) => {
        const newTodo = {
            id: todos.length + 1,
            value: todo,
            isCompleted: false,
        }
        setTodos([...todos, newTodo]);
    }

    const deleteTodoHandler = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const completedTodoHandler = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        const selectedTodo = {...todos[index]};
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        newTodos[index] = selectedTodo;
        setTodos(newTodos);
    }

    const editTodoHandler = (id, newValue) => {
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        const selectedTodo = {...todos[index]};
        selectedTodo.value = newValue;
        newTodos[index] = selectedTodo;
        setTodos(newTodos);
    }

    return ( 
        <article className={styles.todoListContainer}>
            <TodoForm onSubmit={addTodoHandler}/>
            <TodoList todos={todos} onDelete={deleteTodoHandler} onCompleted={completedTodoHandler} onEdit={editTodoHandler} />
        </article>
     );
}
 
export default TodoListApp;