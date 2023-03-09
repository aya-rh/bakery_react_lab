const Counter = ({title, image, ingredients, price, rating, sold, onButtonClick}) => {
    const handleBuyerClick = () => {
        onButtonClick(sold + 1);
    }

    return(
        <div>
            <h3>{title}</h3>
            <img src="image" alt="Cake Picture" />
            <p><strong>Ingredients: </strong>{ingredients}</p>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
            <p>Sold: {sold}</p>
            <button onClick={handleBuyerClick}>Sell Cake</button>
        </div>
    );
}

export default Counter;