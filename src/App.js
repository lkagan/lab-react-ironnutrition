import Search from './components/Search';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsImport from './foods.json';


function App() {
  const [foods, setFoods] = useState(foodsImport);
  const [foodsCopy, setFoodsCopy] = useState(foods);

  const searchHandler = (e) => {
    setFoodsCopy(foods.filter(food => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase());
    }))
  }

  const addFood = (food) => {
    setFoods([food, ...foods]);
  }

  const deleteFood = (name) => {
    setFoodsCopy(foodsCopy.filter(food => food.name !== name));
  }
  return (
    <div className="App">
     <h2>Search</h2>
    <Search searchHandler={searchHandler} />
    <AddFoodForm addFood={addFood}/>
      <h1>Food List</h1>
      
      {foodsCopy.map((food) => {
        return (
          <FoodBox
        food={food} key={food.name} deleteFood={deleteFood}
      />
        );
      })}
    </div>
  );
}

export default App;
