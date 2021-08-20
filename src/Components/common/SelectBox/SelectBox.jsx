import Select from 'react-select';
import styles from './SelectBox.module.scss';

const SelectBox = ({ label , ...rest }) => {
    return ( 
        <div className={styles.selectContainer}>
            <label>
                {label}
            </label>
            <Select
                className={styles.selectBox} 
                {...rest}
            />
        </div>
     );
}
 
export default SelectBox;