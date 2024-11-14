import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext({}); 

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < food_list.length; index++) {
        cart[food_list[index]._id] = 0; // 
    }
    return cart;
}

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = prev[itemId] > 0 ? prev[itemId] - 1 : 0; // Prevent negative values
            return { ...prev, [itemId]: newCount };
        });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item); // Use _id
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item]; // Ensure itemInfo exists
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
