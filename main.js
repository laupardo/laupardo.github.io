//lods the recipe on the page
window.onload = function() {
  let rec = randRecipe();
  document.getElementById("recTitle").innerHTML=rec.title;
  document.getElementById("recDescr").innerHTML=rec.text;
  document.getElementById("recImage").src=rec.image;
};
//Some recipes
const pancakes = {
  title: "Banana Pancakes",
  text: "Ingredients:<br> 1 Ripe Banana<br>0.5 Cups of oats<br> 2 tbsp Baking powder<br> 1 cup of cocoa <br> 1 Egg <br> 1 tbsp vanilla extract <br> Pinch of salt <br> Dash of cinnamon <br> Mash the banana, mix all the ingredients in a bowl and cook on a pan in low heat until holes appear o top, flip for a minute and serve with maple syrup or greek yogurt frosting and fruit",
  image: "./images/pancakes.JPG"
};

const srirachaNoodles = {
  title: "Sriracha Noodles",
  text: "Ingredients <br> 1 Chicken Breast<br> 1 Carrot <br> 1/4 of an onion <br> 0.5 Cups of frozen edamame <br>1 Cup of soy sauce <br>Siracha to taste <br> 100g Rice Noodles <br> Salt and Pepper to taste <br>Cilantro <br>2 Tbsp Hoisin sauce <br>2 Tbsp Apple cider vinegar or rice vinegar <br> Cut chicken into small cubes. Julienne your carrots and slice your onion into small pieces. Soak your noodles in hot water and set them aside. Cook your chicken in a wok until its cooked through and take it out. Cook all your veggies in the wok, after 2 minutes add noodles, chicken and sauces. Garnish with cilantro, lemon and more Sriracha.",
  image: "./images/sn.JPG"
};
const bananaNiceCream = {
  title: "Banana (N)icecream",
  text: "Ingredients: <br>2 very ripe bananas <br> Dash Cinnamon <br> 1 Tbsp vanilla extract <br> 1 Cup Chocoalte Chips <br> Your choice of milk <Br> Peel your bananas and freeze them. When they're frozen put them in the food processor with the cinnamon and vanilla extract and pulse. Add milk until it reaches ice cream consistency. Add chocolate chips. Let it rest in the freezer for a while and enjoy.",
  image: "./images/bn.JPG"
};
//Recipe vector
var recipes = [pancakes, srirachaNoodles, bananaNiceCream];
//Function to get random position for recipe vector
function randRecipe() {
  let pos = Math.floor(Math.random() * recipes.length);
  return recipes[pos];
}
console.log(randRecipe());
