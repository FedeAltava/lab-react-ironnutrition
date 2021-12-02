
import "./App.css";
import "antd/dist/antd.css";
import Foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/Foodbox/FoodBox";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";

function App() {
  const [foods, setFood] = useState(Foods)
  const [showForm, setShowForm] = useState(true)

  return (
    <div className="App">
      <AddFoodForm
        foodsFromApp={foods}
        setFoodsFromApp={setFood}
      />
       <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add new Food'}</button>
      {foods.map((food,index) => {
        return (
          <div>
            <FoodBox
              food={food}
              foodsFromApp={foods}
              setFoodsFromApp={setFood}
              key={index + Date.now()}
            />
          </div>
        )
      })}
    </div>

  )
}
export default App;

