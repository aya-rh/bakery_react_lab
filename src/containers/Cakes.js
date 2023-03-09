import '../App.css';
import { useState } from "react";
import Counter from "../components/Counter";

const CakeContainer = () => {
    
    const [victoriaSpongeCakeSold, setVictoriaSpongeCakeSold] = useState(0);
    const [teaLoafCakeSold, setTeaLoafCakeSold] = useState(0);
    const [carrotCakeSold, setCarrotCakeSold] = useState(0);

    const [totalSales, setTotalSales] = useState(0);

    // const handleCakeSale = (price) => {
    //     setTotalSales(totalSales + price);
    // }

    return (
        <div className="cakes_available">
            <h2>Cakes Available</h2>
            <Counter title={"Victoria Sponge Cake"} image="https://assets.epicurious.com/photos/622b69616a88a4aff613f7d6/1:1/w_960,c_limit/Victory-Victoria-Sponge.jpg" ingredients={"eggs, butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5} sold={victoriaSpongeCakeSold} onButtonClick={setVictoriaSpongeCakeSold}/>
            <Counter title={"Tea Loaf Cake"} image="https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/7346-Lady_Grey_Cake.jpg?v=1-0" ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3} sold={teaLoafCakeSold} onButtonClick={setTeaLoafCakeSold}/>
            <Counter title={"Carrot Cake"} image="https://www.spoonforkbacon.com/wp-content/uploads/2021/03/carrot_cake_cream_cheese_frosting.jpg" ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5} sold={carrotCakeSold} onButtonClick={setCarrotCakeSold}/>
            <div className='totals'>
            <p id="total-sold"><strong>Total cakes sold: </strong>{victoriaSpongeCakeSold + teaLoafCakeSold + carrotCakeSold}</p>
            <p id="total-sales"><strong>Total sales made: </strong>{totalSales}</p>
            </div>
        </div>
    );
}

export default CakeContainer;