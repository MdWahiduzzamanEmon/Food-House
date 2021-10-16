import  { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useData = () => {
    const [foods, setFoods] = useState([]);
    const [searchFood, setSearchFood] = useState([]);

  useEffect(() => {
  
    fetch(
      "https://raw.githubusercontent.com/MdWahiduzzamanEmon/db.json/main/db.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setSearchFood(data);
      })
      
  }, []);
    return {
      searchFood,
        foods,
        setFoods,
        setSearchFood
    };
};

export default useData;