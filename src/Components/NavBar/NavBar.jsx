import styles from './NavBar.module.scss';

const NavBar = ({ unCompleted }) => {
  return (
    <header className={styles.header}>
      {unCompleted ? (
        <>
          <span className={styles.badge}>{unCompleted}</span> <h1 className={styles.title}>uncompleted todos</h1>
        </>
      ) : (
        <>
          <h1 className={styles.title}>write your today todos!</h1>
        </>
      )}
    </header>
  );
};

export default NavBar;
