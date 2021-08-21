import { useState } from "react";
import SelectBox from "../common/SelectBox/SelectBox";

const options = [
    {value: "All", label: "All"},
    {value: "Uncompleted", label: "Uncompleted"},
    {value: "Completed", label: "Completed"},
];

const FilterTodos = ({ filter, setFilter }) => {

    const changeHandler = (e) => {
        setFilter(e.value);
    }

    return ( 
        <SelectBox label="Filter By" setFilter={setFilter} value={filter.value} onChange={changeHandler} options={options}/>
     );
}
 
export default FilterTodos;