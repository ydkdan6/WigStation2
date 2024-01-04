import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import image1 from '../Human-wig/stockimg1.jpg';
import Categories from './categories';
import StarRating from "./starRating";

const Category = () => {

  const history = useHistory();

    const [data, setData] = useState(Categories);
    const filterResult = (cartItem) => {
      const result = Categories.filter((curData)=> {
        return curData.category === cartItem
      });

      setData(result);
    }
    const handleBuyNow = (product) => {
      // Redirect to the add-to-cart page with product details
      history.push(`/add-to-cart/${encodeURIComponent(product.title)}/${product.price}/${product.rating}`);
    };

  return (
    <div>
      <h1 className="text-center text-info">Our Collections</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('very big')}>Very Big</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('big')}>Big</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('small')}>Small</button>
            <button className="btn btn-warning w-100 mb-4"onClick={() =>
            filterResult('medium')}>Medium</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('very small')}>Very Small</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values)=> {
               const {id,title,price,rating,image} = values;
                return (
                  <>
              <div className="col-md-4 mb-4" key={id}>
                <div class="card">
                  <img src={image1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: #{price}</p>
                    <p className="card-text"> <StarRating totalStars={5} rating={rating}/>
                    </p>
                    <button
  href="#"
  className="btn btn-dark"
    onClick={() => handleBuyNow({ id, title, price, rating })}>
  Buy Now
</button>

                  </div>
                </div>
              </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
