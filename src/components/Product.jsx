const Product = ({ product }) => {


    return ( 
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: £{product.price}</p>
            <button>Add to basket</button>
        </div>
    );
}

export default Product;