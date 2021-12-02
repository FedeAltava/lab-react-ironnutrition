import { Card, Col, Button } from "antd";

const Foodbox = (props) => {
  const { food, setFoodsFromApp, foodsFromApp } = props

  const deleteFood = (foodName) => {
    const filteredFood = foodsFromApp.filter((food) => {
    
      return foodName !== food.name

    })
    setFoodsFromApp(filteredFood)
  }



  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>






  )
}

export default Foodbox