import Select from 'react-select';
import styles from './SelectBox.module.scss';

const SelectBox = ({ ...rest }) => {
    return ( 
        <div className={styles.selectContainer}>
            <Select
                className={styles.selectBox} 
                {...rest}
            />
        </div>
     );
}
 
export default SelectBox;