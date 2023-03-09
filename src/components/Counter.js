import '../App.css';

const Counter = ({title, image, ingredients, price, rating, sold, onButtonClick, onSellClick}) => {
    
    const handleSellClick = () => {
        onButtonClick(sold + 1);
        onSellClick(); 
    }

    return(
        <div className="cake">
            <h3>{title}</h3>
            <img src={image} alt="Cake Picture" />
            <p><strong>Ingredients: </strong>{ingredients}</p>
            <p><strong>Price: </strong>£{price}</p>
            <p><strong>Rating: </strong> {rating}</p>
            <p><strong>Sold: </strong> {sold}</p>
            <button className='button' onClick={handleSellClick}>Sell Cake</button>
        </div>
    );
}

export default Counter;