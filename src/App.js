import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsImport from './foods.json';


function App() {
  const [foods, setFoods] = useState(foodsImport);

  const addFood = (food) => {
    setFoods([food, ...foods]);
  }
  return (
    <div className="App">
    <AddFoodForm addFood={addFood}/>
      <h1>Food List</h1>
      
      {foods.map((food) => {
        return (
          <FoodBox
        food={food} key={food.name}
      />
        );
      })}
    </div>
  );
}

export default App;
