import Select from 'react-select';
import styles from './SelectBox.module.scss';

const SelectBox = ({ ...rest }) => {

    const colourStyles = {
        control: (styles, {isFocused}) => ({ ...styles, backgroundColor: '#FF4C29', color: `#334756`}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isSelected ? '#ff4C29' : '#334756',
            color: '#FFF',
            cursor: isSelected ? 'not-allowed' : 'pointer',
          };
        },
      };

    return ( 
        <div className={styles.selectContainer}>
            <Select
            styles={colourStyles}
                className={styles.selectBox} 
                {...rest}
            />
        </div>
     );
}
 
export default SelectBox;