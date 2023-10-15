const Product = ({ product, addProductToBasket }) => {


    return ( 
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: £{product.price}</p>
            <button type="submit" onClick={() => addProductToBasket(product)}>Add to basket</button>
        </div>
    );
}

export default Product