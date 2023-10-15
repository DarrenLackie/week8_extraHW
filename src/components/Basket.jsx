import React from 'react';


const Basket = () => {

    const basketItems = []


    const total = basketItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <div>
            <h1>Your Basket</h1>
            {basketItems.map((item) => (
                <div key={item.id}>{item.name} - ${item.price}</div>
            ))}
            <p>Total: ${total}</p>
        </div>
    )
}

export default Basket