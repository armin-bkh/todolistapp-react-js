import {BiTrash, BiPencil} from 'react-icons/bi';
import styles from './TodoItem.module.scss';

const TodoItem = ({value, isCompleted, onDelete, onCompleted, onEdit}) => {
    return ( 
        <div className={styles.todoItem}>
            <div onClick={onCompleted} className={`${styles.todoItemText} ${isCompleted && styles.isCompleted}`}>{value}</div>
            <button onClick={onEdit} className={`${styles.todoItemBtn} ${styles.todoITemPencil}`}><BiPencil/></button>
            <button onClick={onDelete} className={`${styles.todoItemBtn} ${styles.todoItemTrash}`}><BiTrash/></button>
        </div>
     );
}
 
export default TodoItem;