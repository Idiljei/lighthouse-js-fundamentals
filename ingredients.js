const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:


// while loop 

let i = 0;
while (i <= ingredients.length) {
  console.log(ingredients[i]);
  i++;
}



// for loop 

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}




//loop backwards 

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}


console.log (ingredients[2]);



