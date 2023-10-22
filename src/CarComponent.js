const CarComponent = (props)=>{
    return(
        <div>
            <h1>Car Component</h1>
            <h2>Car Name: {props.name}</h2>
            <h2>Car Model: {props.model}</h2>
            <h2>Car Color: {props.color}</h2>
        </div>
    )
}

export default CarComponent;