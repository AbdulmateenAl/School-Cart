import React, { useState } from 'react';
import App from './App';
import { foodItems, cleaningItems, clothingItems, readingItems } from './schoolItem';

export default function SchoolCart() {
    // Initializing state
    const [cart, setCart] = useState([]);

    // To add item
    const addItem = (item) => {
        setCart((prev) => {
            // using spread syntax(...prev)
            return [item, ...prev];
        });
    };

    // To remove item
    const removeItem = (targetIndex) => {
        setCart((prev) => {
            return prev.filter((item, index) => index !== targetIndex);
        });
    };

    return (
        <div>
            <header className="App-header">
                <h1>School List</h1>
            </header>
            <ul>
                {cart.map((item, index) => (
                <li onClick={() => removeItem(index)} key={index}>
                {item}
                </li>
            ))}
            </ul>
            <h2>Food Items</h2>
            <App items={foodItems} onItemClick={addItem} />
            <h2>Cleaning Items</h2>
            <App items={cleaningItems} onItemClick={addItem} />
            <h2>Clothing Items</h2>
            <App items={clothingItems} onItemClick={addItem} />
            <h2>Reading Items</h2>
            <App items={readingItems} onItemClick={addItem} />
        </div>
    )
}