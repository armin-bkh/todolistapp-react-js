import FilterTodos from '../Filter/Filter';
import styles from './NavBar.module.scss';

const NavBar = ({ unCompleted, onFilter, filter, setFilter }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.AppTitle}>TodoList App</h1>
      {unCompleted ? (
        <div className={styles.countContainer}>
        <div style={{display: 'flex', alignItems: "center"}}>
          <span className={styles.badge}>{unCompleted}</span> <h1 className={styles.title}>uncompleted todos</h1>
        </div>
          <FilterTodos filter={filter} setFilter={setFilter} onFilter={onFilter}/>
          </div>
      ) : (
        <>
          <h1 className={styles.title}>write your today todos!</h1>
        </>
      )}
    </header>
  );
};

export default NavBar;
