import ProductItem from "./ProductItem";
import ProductTitle from "./ProductTitle"

const ProductTable = ()=>{
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductTitle title="Fruits"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                    <ProductTitle title="Vegetable"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                    <ProductItem name="Apple" price="1.99" qty="10"/>
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;