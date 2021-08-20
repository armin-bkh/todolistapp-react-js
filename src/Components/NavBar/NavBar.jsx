import FilterTodos from '../Filter/Filter';
import styles from './NavBar.module.scss';

const NavBar = ({ unCompleted, onFilter }) => {
  return (
    <header className={styles.header}>
      <h1>TodoListApp</h1>
      <div className={styles.countContainer}>
      {unCompleted ? (
        <>
          <span className={styles.badge}>{unCompleted}</span> <h1 className={styles.title}>uncompleted todos</h1>
        </>
      ) : (
        <>
          <h1 className={styles.title}>write your today todos!</h1>
        </>
      )}
      </div>
      <FilterTodos onFilter={onFilter}/>
    </header>
  );
};

export default NavBar;
