const ProductItem = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.qty}</td>
            </tr>
        </>
    )
}
export default ProductItem;