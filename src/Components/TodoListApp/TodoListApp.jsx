import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList"
import styles from './TodoListApp.module.scss';

const TodoListApp = () => {
    const [todos, setTodos] = useState([]);
    const [filterTodo, setFilterTodo] = useState([]);
    const [filter, setFilter] = useState({label: 'All', value: 'All'});

    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        setTodos(savedTodos || []);
    }, [])
    

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos));
        filterTodoHandler(filter.value);
    }, [todos ,filter])

    const addTodoHandler = (todo) => {
        const newTodo = {
            id: new Date().getTime(),
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

    const filterTodoHandler = (value) =>{
        if(value === "All") setFilterTodo(todos);
        if(value === "Uncompleted") {
            const updatedTodos = todos.filter(todo => !todo.isCompleted);
            setFilterTodo(updatedTodos);
        }
        if( value === "Completed") {
            const updatedTodos = todos.filter(todo => todo.isCompleted);
            setFilterTodo(updatedTodos);
        }
    }

    return ( 
        <article className={styles.todoListContainer}>
            <NavBar filter={filter} setFilter={setFilter} unCompleted={todos.filter(todo => !todo.isCompleted).length} onFilter={filterTodoHandler}/>
            <TodoForm onSubmit={addTodoHandler}/>
            <TodoList todos={filterTodo} onDelete={deleteTodoHandler} onCompleted={completedTodoHandler} onEdit={editTodoHandler} />
        </article>
     );
}
 
export default TodoListApp;