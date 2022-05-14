import { Divider, Input } from 'antd';

function AddFoodForm({addFood}) {

  const defaultFormData = {
    name: '',
    calories: '',
    servings: '',
    image: ''
  }

  let food = {...defaultFormData};

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(food);
    food = {...defaultFormData};
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} name="name" type="text" onChange={(e) => {food.name = e.target.value }} />

      <label>Image</label>
      <Input value={undefined} name="image" type="text" onChange={(e) => {food.image = e.target.value}} />

      <label>Calories</label>
      <Input value={undefined} name="calories" type="number" onChange={(e) => {food.calories = e.target.value}} />

      <label>Servings</label>
      <Input value={undefined} name="servings" type="number" onChange={(e) => {food.servings = e.target.value}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;