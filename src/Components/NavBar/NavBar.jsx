import FilterTodos from '../Filter/Filter';
import styles from './NavBar.module.scss';

const NavBar = ({ unCompleted, onFilter, filter, setFilter }) => {
  return (
    <header className={styles.header}>
      <h1>TodoList App</h1>
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
      <FilterTodos filter={filter} setFilter={setFilter} onFilter={onFilter}/>
    </header>
  );
};

export default NavBar;
