import { useState } from "react";
import SelectBox from "../common/SelectBox/SelectBox";

const options = [
    {value: "", label: "All"},
    {value: "Uncompleted", label: "Uncompleted"},
    {value: "Completed", label: "Completed"},
];

const FilterTodos = ({onFilter}) => {
    const [filter, setFilter] = useState('');

    const changeHandler = (e) => {
        setFilter(e.value);
        onFilter(e.value);
    }

    return ( 
        <SelectBox label="Filter By" setFilter={setFilter} value={filter.value} onChange={changeHandler} options={options}/>
     );
}
 
export default FilterTodos;