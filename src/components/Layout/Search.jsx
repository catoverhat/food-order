import "./Search.css"
import {DUMMY_MEALS} from "../Meals/AvailableMeals"
import { useState } from "react"

const MealSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (event) => {
      const value = event.target.value.toLowerCase();
      setSearchTerm(value);
  
      const results = DUMMY_MEALS.filter((meal) =>
        meal.name.toLowerCase().includes(value)
      );
  
      setSearchResults(results);
    };
  
    return (
      <div>
        <input type="text" placeholder="Search meals" onChange={handleSearch} />
        {searchResults.map((meal) => (
          <div key={meal.id}>
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            <p>{meal.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MealSearch;