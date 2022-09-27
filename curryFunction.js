//expample

const curry = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3 => {
      console.log("ingredients: ", ingredient1, ingredient2, ingredient3)
    })
  }
}

curry("pork")("burger")("cheese")

//another example 
const curry2 = ingredient1 => ingredient2 => ingredient3 => console.log("ingredients: ", ingredient1, ingredient2, ingredient3)