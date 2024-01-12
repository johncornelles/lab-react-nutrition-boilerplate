import { useState } from "react";

export default function FoodBox(prop) {
    const { ele, i } = prop;
    const { img, name, cal } = ele;

    const [input, setInput] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleQuantity = () => 
        input >= 0 ? setQuantity(input) : setQuantity(0)
    

    return (
        <div className="whole-div" key={i}>
            <div className="food-details">
                <img className="food-image" src={img} alt={name} />
            <div className="food-name-calories">
                <span>{name}</span>
                <span>{cal} calories</span>
            </div>
            <div className="input-plus">
                <input
                className="input-field"
                min={0}
                type="number"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button className="quantity-section" onClick={handleQuantity}>+</button>
            </div>
            </div>
            <div className="reset-div">
                <p>
                {quantity} {name} = {cal * quantity} calories
                </p>
            <button
                className="food-details button"
                onClick={() => {
                    setInput(0);
                    setQuantity(0);
                }}
            >
                Reset
            </button>
            </div>
        </div>
    );
}