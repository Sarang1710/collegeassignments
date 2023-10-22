import SearchBoxComponent from "../Components/SearchBoxComponent";
import ProductTable from "./ProductTable";

const FruitableTable = ()=>{
    return (
        <>
            <h1>Filterable Table</h1>
            <SearchBoxComponent/>
            <ProductTable/>
        </>
    )
}

export default FruitableTable;