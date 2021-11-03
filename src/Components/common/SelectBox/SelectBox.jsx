import Select from "react-select";
import styles from "./SelectBox.module.scss";

const SelectBox = ({ ...rest }) => {
  const colourStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      fontSize: "2vh",
      backgroundColor: "#63abe2",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: "2vh",
        backgroundColor: isSelected ? "#63abe2" : "#fff",
        color: "#000",
        cursor: isSelected ? "not-allowed" : "pointer",
      };
    },
  };

  return (
    <div className={styles.selectContainer}>
      <Select styles={colourStyles} className={styles.selectBox} {...rest} />
    </div>
  );
};

export default SelectBox;
