import '../App.css';

const Counter = ({title, image, ingredients, price, rating, sold, onButtonClick}) => {
    
    const handleSellClick = () => {
        onButtonClick(sold + 1);
        // setTotalSales(totalSales + price); 
    }

    return(
        <div className="cake">
            <h3>{title}</h3>
            <img src="{image}" alt="Cake Picture" />
            <p><strong>Ingredients: </strong>{ingredients}</p>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
            <p>Sold: {sold}</p>
            <button className='button' onClick={handleSellClick}>Sell Cake</button>
        </div>
    );
}

export default Counter;