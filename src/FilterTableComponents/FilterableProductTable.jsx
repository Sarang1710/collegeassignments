import ProductTable from "./ProductTable";
import SearchBoxComponent from "./SearchBoxComponent"
import { useState } from "react";

const FilterableProductTable = () => {
    let [search, setSearch] = useState("");
    let [inStock, setInStock] = useState(false);

    const hancelCallback = (data)=>{
        setSearch(search = data);
    }
    const handleInStock = (data)=>{
        setInStock(inStock = data);
    }
    return (
        <>
        <div className="text-center">
            <SearchBoxComponent pcall = {hancelCallback} incheck = {handleInStock}/>
            <br />
            <ProductTable search = {search} ischeck = {inStock}/>
        </div>
        </>
    )
}

export default FilterableProductTable;