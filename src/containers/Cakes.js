import { useState } from "react";
import Counter from "../components/Counter";

const CakeContainer = () => {
    const [victoriaSpongeCakePrice, setVictoriaSpongeCakePrice] = useState(0);
    const [victoriaSpongeCakeRating, setVictoriaSpongeCakeRating] = useState(0); 
    const [victoriaSpongeCakeSold, setVictoriaSpongeCakeSold] = useState(0);

    const [teaLoafCakePrice, setTeaLoafCakePrice] = useState(0);
    const [teaLoafCakeRating, setTeaLoafCakeRating] = useState(0);
    const [teaLoafCakeSold, setTeaLoafCakeSold] = useState(0);

    const [carrotCakePrice, setCarrotCakePrice] = useState(0);
    const [carrotCakeRating, setCarrotCakeRating] = useState(0);
    const [carrotCakeSold, setCarrotCakeSold] = useState(0);

    return (
        <div>
            <h2>Cakes Available</h2>
            <Counter title={"Victoria Sponge Cake"} image={"https://assets.epicurious.com/photos/622b69616a88a4aff613f7d6/1:1/w_960,c_limit/Victory-Victoria-Sponge.jpg"} ingredients={"eggs, butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5} sold={victoriaSpongeCakeSold} onButtonClick={setVictoriaSpongeCakeSold}/>
            <Counter title={"Tea Loaf Cake"} image={"https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/7346-Lady_Grey_Cake.jpg?v=1-0"} ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3} sold={teaLoafCakeSold} onButtonClick={setTeaLoafCakeSold}/>
            <Counter title={"Carrot Cake"} image={"https://www.spoonforkbacon.com/wp-content/uploads/2021/03/carrot_cake_cream_cheese_frosting.jpg"} ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5} sold={carrotCakeSold} onButtonClick={setCarrotCakeSold}/>
            <p id="total_sold">Total cakes sold: {victoriaSpongeCakeSold + teaLoafCakeSold + carrotCakeSold}</p>
            <p id="total_sales">Total sales from cakes sold: {victoriaSpongeCakePrice + teaLoafCakePrice + carrotCakePrice}</p>
        </div>
    )
}

export default CakeContainer;