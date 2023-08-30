import React from "react";
import "./SearchResult.css";
import { BASE_URL } from "../../App";
import Button from "../Button/Button";

const SearchResult = ({ data }) => {
  return (
    <section className="foodCardContainer">
      <div className="foodCards">
        {data?.map((food, index) => (
          <div className="foodCard" key={index}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="Image" />
            </div>

            <div className="food_info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button text={"$" + `${food.price.toFixed(2)}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
