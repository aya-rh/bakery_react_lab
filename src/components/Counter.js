const Counter = ({title, ingredients, price, rating, sold, onButtonClick}) => {
    const handleBuyerClick = () => {
        onButtonClick(sold + 1);
    }

    return(
        <div>
            <h3>{title}</h3>
            <p><strong>Ingredients: </strong>{ingredients}</p>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
            <p>Sold: {sold}</p>
            <button onClick={handleBuyerClick}>Buy Cake</button>
        </div>
    );
}

export default Counter;