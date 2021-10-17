import React, { useContext, useState } from 'react';

export const AuthAddCart = React.createContext();

export const useAddToCart = () => {
    return useContext(AuthAddCart);
}


const AddtoCart = ({ children }) => {
    const [addingFood, setAddingFood] = useState([]);
     
    const handleToAddToCart = (meal) => {
    const adding = [...addingFood, meal];
   setAddingFood(adding);
 };

    const value = {
      handleToAddToCart,
      addingFood,
    };
    
    return (
      <AuthAddCart.Provider value={value}>{children}</AuthAddCart.Provider>
    );
};

export default AddtoCart;