import { useState } from "react";
import SelectBox from "../common/SelectBox/SelectBox";

const options = [
    {value: "All", label: "All"},
    {value: "Uncompleted", label: "Uncompleted"},
    {value: "Completed", label: "Completed"},
];

const FilterTodos = ({ filter, setFilter }) => {

    const changeHandler = (e) => {
        setFilter(e);
    }

    return ( 
        <SelectBox setFilter={setFilter} value={filter} onChange={changeHandler} options={options}/>
     );
}
 
export default FilterTodos;