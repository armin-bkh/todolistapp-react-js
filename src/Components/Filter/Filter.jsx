import { useState } from "react";
import SelectBox from "../common/SelectBox/SelectBox";

const options = [
    {value: "", label: "All"},
    {value: "Uncompleted", label: "Uncompleted"},
    {value: "Completed", label: "Completed"},
];

const FilterTodos = ({onFilter, filter, setFilter}) => {

    const changeHandler = (e) => {
        const value = e.value;
        setFilter(value);
        onFilter(value);
    }

    return ( 
        <SelectBox label="Filter By" setFilter={setFilter} value={filter.value} onChange={changeHandler} options={options}/>
     );
}
 
export default FilterTodos;