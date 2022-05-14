import { Divider, Input } from 'antd';
import { useState } from "react";

function AddFoodForm({addFood}) {

    const defaultFood = {
        name: '',
        calories: '',
        servings: '',
        image: ''
    }

    const [food, setFood] = useState(defaultFood);

    // Add the new food to the list when user submits the form
    const submitHandler = (e) => {
        e.preventDefault();
        addFood(food);
        setFood(defaultFood)
    }

    // Update the food item as the user types
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFood(food => ({
            ...food,
            [name]: value
        }))
    }

  return (
    <form onSubmit={submitHandler}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={food.name} name="name" type="text" onChange={e => changeHandler(e)} />

      <label>Image</label>
      <Input value={food.image} name="image" type="text" onChange={e => changeHandler(e) } />

      <label>Calories</label>
      <Input value={food.calories} name="calories" type="number" onChange={e => changeHandler(e) } />

      <label>Servings</label>
      <Input value={food.servings} name="servings" type="number" onChange={e => changeHandler(e) } />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;