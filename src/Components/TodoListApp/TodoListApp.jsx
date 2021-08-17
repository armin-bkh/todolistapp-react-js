import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList"
import styles from './TodoListApp.module.scss';
const TodoListApp = () => {
    return ( 
        <article className={styles.todoListContainer}>
            <TodoForm />
            <TodoList />
        </article>
     );
}
 
export default TodoListApp;