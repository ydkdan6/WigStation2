import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Categories from "./categories";

const AddToCart = () => {
    const [data, setData] = useState(Categories);

  const { title, price, rating } = useParams();

  return (
    <div>
        {data.map((values)=> {
               const {id,title,price,rating,image} = values;
        <>
      <h2>{title}</h2>
      <p>Price: #{price}</p>
      <p>Rating: {rating}</p>
      {/* Additional logic for adding to cart */}
      </>
    })}
    </div>
  );
};

export default AddToCart;
