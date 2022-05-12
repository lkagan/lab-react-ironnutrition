import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';


function App() {
  const [food, setFood] = useState(foods);

  const addFood = (food) => {
    setFood([...food, food]);
  }
  return (
    <div className="App">
    <AddFoodForm addFood={addFood}/>
      <h1>Food List</h1>
      
      {food.map((food) => {
        return (
          <FoodBox
        food={food}
      />
        );
      })}
    </div>
  );
}

export default App;
