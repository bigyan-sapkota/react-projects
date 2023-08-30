import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data.");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <div className="topContainer">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </div>

        <div className="filterContainer">
          <Button text="All" />
          <Button text="Breakfast" />
          <Button text="Lunch" />
          <Button text="Dinner" />
        </div>
      </div>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;
