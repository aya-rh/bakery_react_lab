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
            <Counter title={"Victoria Sponge Cake"} ingredients={"eggs, butter, sugar, self-raising flour, baking powder, milk"} price={5} rating={5} sold={victoriaSpongeCakeSold} onButtonClick={setVictoriaSpongeCakeSold}/>
            <Counter title={"Tea Loaf Cake"} ingredients={"eggs, oil, dried fruit, sugar, self-raising flour, strong tea"} price={2} rating={3} sold={teaLoafCakeSold} onButtonClick={setTeaLoafCakeSold}/>
            <Counter title={"Carrot Cake"} ingredients={"carrots, walnuts, oil, cream cheese, flour, sugar"} price={8} rating={5} sold={carrotCakeSold} onButtonClick={setCarrotCakeSold}/>
            <p>Total cakes sold: {victoriaSpongeCakeSold + teaLoafCakeSold + carrotCakeSold}</p>
            <p>Total sales from cakes sold: {victoriaSpongeCakePrice + teaLoafCakePrice + carrotCakePrice}</p>
        </div>
    )
}

export default CakeContainer;