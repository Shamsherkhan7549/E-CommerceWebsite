import React,  { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fees = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const  navigate = useNavigate();

    const addToCart = async(itemId,size) => {

        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error('Select Product Size');
            return
        }
       
        if(cartData[itemId]){
            
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
                
            }else{
                cartData[itemId][size] = 1;
            }
            
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount =() => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if(cartItems[items][item]>0){
                totalCount += cartItems[items][item]
                }
            }
        }

        return totalCount;

    }

    const getCartAmmount =() => {
        let totalAmmount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            
            for(const item in cartItems[items]){
                
                try{
                    
                    if(cartItems[items][item] > 0){
                        totalAmmount += itemInfo.price*cartItems[items][item]
                    }

                }catch(error){
                    
                }
            }
        }
        return totalAmmount;
    }

    const updateQuantity = async(itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        console.log(cartData);
        
        setCartItems(cartData);
    }

    const value = {
        products, currency, delivery_fees,search, setSearch,showSearch, setShowSearch,
        cartItems, addToCart, updateQuantity,getCartCount,getCartAmmount,navigate
    }

    return(
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

