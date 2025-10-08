import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Blog from './pages/Blog';
import './App.css';

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <a href="/" className="footer-logo">Tasty Bites</a>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/recipes">Recipes</a></li>
          </ul>
          <p className="copyright">© 2025 Tasty Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      const parsedRecipes = JSON.parse(savedRecipes);
      setRecipes(parsedRecipes);
      console.log("Loaded recipes from localStorage:", parsedRecipes.length);
    } else {
      // Clear any existing data first
      localStorage.removeItem('recipes');
      
      const sampleRecipes = [
        // BREAKFAST (5 recipes)
        {
          id: 1,
          title: "Avocado Toast with Poached Eggs",
          image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 10,
          cookTime: 10,
          servings: 2,
          category: "breakfast",
          description: "Creamy avocado on crispy toast topped with perfectly poached eggs.",
          ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "2 eggs",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Fresh cilantro for garnish"
          ],
          instructions: [
            "Toast the bread until golden and crispy.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Poach eggs in simmering water for 3-4 minutes.",
            "Spread avocado mixture on toast.",
            "Top with poached eggs and garnish with cilantro and red pepper flakes."
          ],
          rating: 4.3
        },
        {
          id: 2,
          title: "Berry Smoothie Bowl",
          image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 5,
          cookTime: 0,
          servings: 1,
          category: "breakfast",
          description: "A thick, creamy smoothie bowl topped with fresh fruits and nuts.",
          ingredients: [
            "1 cup mixed frozen berries",
            "1 banana",
            "1/2 cup Greek yogurt",
            "2 tbsp almond milk",
            "1 tbsp honey",
            "Toppings: fresh berries, granola, chia seeds, coconut flakes"
          ],
          instructions: [
            "Blend frozen berries, banana, yogurt, and almond milk until smooth.",
            "Pour into a bowl.",
            "Top with fresh berries, granola, chia seeds, and coconut flakes.",
            "Drizzle with honey and serve immediately."
          ],
          rating: 4.5
        },
        {
          id: 3,
          title: "Veggie Breakfast Burrito",
          image: "https://naturallyella.com/wp-content/uploads/2016/08/vegetarian_breakfast_burrito-2-1.jpg",
          prepTime: 15,
          cookTime: 10,
          servings: 2,
          category: "breakfast",
          description: "Hearty breakfast burritos packed with vegetables and protein.",
          ingredients: [
            "2 large tortillas",
            "4 eggs",
            "1/2 cup black beans",
            "1/4 cup corn",
            "1/4 cup diced bell peppers",
            "1/4 cup shredded cheese",
            "2 tbsp salsa",
            "1 avocado, sliced",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Scramble eggs in a pan until cooked through.",
            "Warm tortillas in a dry skillet.",
            "Layer eggs, beans, corn, peppers, and cheese on tortillas.",
            "Top with salsa and avocado slices.",
            "Roll up tightly and serve warm."
          ],
          rating: 4.2
        },
        {
          id: 4,
          title: "Banana Pancakes",
          image: "https://www.allthingsmamma.com/wp-content/uploads/2022/05/Banana-Pancakes-Hero-15-scaled.jpg",
          prepTime: 10,
          cookTime: 15,
          servings: 3,
          category: "breakfast",
          description: "Fluffy pancakes with natural banana sweetness.",
          ingredients: [
            "1 cup all-purpose flour",
            "1 tbsp sugar",
            "2 tsp baking powder",
            "1/4 tsp salt",
            "1 cup milk",
            "1 egg",
            "2 ripe bananas, mashed",
            "2 tbsp melted butter",
            "Maple syrup for serving"
          ],
          instructions: [
            "Mix dry ingredients in a bowl.",
            "In another bowl, whisk milk, egg, mashed bananas, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "Cook on a greased griddle until bubbles form, then flip.",
            "Serve warm with maple syrup."
          ],
          rating: 4.7
        },
        {
          id: 5,
          title: "Greek Yogurt Parfait",
          image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 5,
          cookTime: 0,
          servings: 1,
          category: "breakfast",
          description: "Layers of creamy yogurt, crunchy granola, and fresh fruits.",
          ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "1/2 cup mixed berries",
            "1 tbsp honey",
            "1 tbsp chia seeds",
            "Mint leaves for garnish"
          ],
          instructions: [
            "In a glass, layer half the yogurt.",
            "Add a layer of granola and berries.",
            "Repeat layers with remaining ingredients.",
            "Drizzle with honey and sprinkle chia seeds.",
            "Garnish with mint leaves and serve."
          ],
          rating: 4.4
        },

        // LUNCH (5 recipes)
        {
          id: 6,
          title: "Quinoa Salad Bowl",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 15,
          cookTime: 15,
          servings: 4,
          category: "lunch",
          description: "Nutrient-packed quinoa salad with fresh vegetables and lemon dressing.",
          ingredients: [
            "1 cup quinoa",
            "2 cups water",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, diced",
            "1/4 cup feta cheese",
            "1/4 cup olive oil",
            "2 tbsp lemon juice",
            "Salt and pepper to taste",
            "Fresh parsley"
          ],
          instructions: [
            "Cook quinoa in water according to package instructions.",
            "Let quinoa cool completely.",
            "Mix quinoa with cucumber, tomatoes, and red onion.",
            "Whisk olive oil, lemon juice, salt, and pepper for dressing.",
            "Toss salad with dressing and top with feta and parsley."
          ],
          rating: 4.6
        },
        {
          id: 7,
          title: "Chicken Caesar Wrap",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 10,
          cookTime: 0,
          servings: 2,
          category: "lunch",
          description: "Classic Caesar salad wrapped in a soft tortilla with grilled chicken.",
          ingredients: [
            "2 large tortillas",
            "2 cups romaine lettuce, chopped",
            "1 cup cooked chicken, shredded",
            "1/4 cup Caesar dressing",
            "2 tbsp Parmesan cheese",
            "1/4 cup croutons"
          ],
          instructions: [
            "Lay tortillas flat on a surface.",
            "In a bowl, mix lettuce, chicken, and Caesar dressing.",
            "Divide mixture between tortillas.",
            "Sprinkle with Parmesan and croutons.",
            "Roll up tightly and serve."
          ],
          rating: 4.3
        },
        {
          id: 8,
          title: "Vegetable Stir Fry",
          image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 15,
          cookTime: 10,
          servings: 3,
          category: "lunch",
          description: "Quick and colorful vegetable stir fry with tofu in savory sauce.",
          ingredients: [
            "2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas)",
            "200g firm tofu, cubed",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp ginger, minced",
            "2 cloves garlic, minced",
            "1 tbsp honey",
            "2 cups cooked rice"
          ],
          instructions: [
            "Heat sesame oil in a wok or large pan.",
            "Add tofu and cook until golden.",
            "Add ginger and garlic, cook for 1 minute.",
            "Add vegetables and stir fry for 5-7 minutes.",
            "Mix in soy sauce and honey, cook for 2 more minutes.",
            "Serve over rice."
          ],
          rating: 4.4
        },
        {
          id: 9,
          title: "Mediterranean Bowl",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 20,
          cookTime: 0,
          servings: 2,
          category: "lunch",
          description: "Fresh Mediterranean flavors in a beautiful bowl arrangement.",
          ingredients: [
            "1 cup cooked couscous",
            "1/2 cup chickpeas",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup Kalamata olives",
            "1/4 cup feta cheese",
            "1/4 cup cucumber, diced",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 tsp oregano",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Arrange couscous in bowls as base.",
            "Top with chickpeas, tomatoes, olives, cucumber, and feta.",
            "Whisk olive oil, lemon juice, oregano, salt, and pepper for dressing.",
            "Drizzle dressing over bowls.",
            "Serve immediately."
          ],
          rating: 4.5
        },
        {
          id: 10,
          title: "Black Bean Burgers",
          image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
          prepTime: 15,
          cookTime: 10,
          servings: 4,
          category: "lunch",
          description: "Hearty vegetarian burgers packed with flavor and protein.",
          ingredients: [
            "2 cans black beans, drained",
            "1/2 cup breadcrumbs",
            "1/4 cup red onion, diced",
            "1 egg",
            "1 tsp cumin",
            "1 tsp chili powder",
            "4 burger buns",
            "Toppings: lettuce, tomato, avocado, mayo"
          ],
          instructions: [
            "Mash black beans in a bowl.",
            "Add breadcrumbs, onion, egg, and spices. Mix well.",
            "Form into 4 patties.",
            "Cook in a skillet for 5 minutes per side.",
            "Serve on buns with desired toppings."
          ],
          rating: 4.2
        },

        // DINNER (5 recipes)
        {
          id: 11,
          title: "Lemon Herb Chicken with Roasted Vegetables",
          image: "https://i.pinimg.com/1200x/e7/02/fa/e702fa03da42390a3dec082355478d0f.jpg",
          prepTime: 15,
          cookTime: 30,
          servings: 4,
          category: "dinner",
          description: "A delicious and healthy chicken dish with fresh herbs and roasted vegetables.",
          ingredients: [
            "4 boneless, skinless chicken breasts",
            "1 lemon (zested and juiced)",
            "2 tablespoons olive oil",
            "3 cloves garlic (minced)",
            "1 teaspoon dried oregano",
            "1 teaspoon dried thyme",
            "Salt and pepper to taste",
            "2 bell peppers, sliced",
            "1 zucchini, sliced",
            "1 cup cherry tomatoes"
          ],
          instructions: [
            "Preheat your oven to 400°F (200°C).",
            "Mix the lemon zest, lemon juice, olive oil, minced garlic, oregano, thyme, salt, and pepper in a small bowl to create the marinade.",
            "Place the chicken breasts in a resealable plastic bag or shallow dish and pour half of the marinade over them. Allow the chicken to marinate for at least 30 minutes.",
            "While the chicken marinates, chop your favorite vegetables (bell peppers, zucchini, and cherry tomatoes) into bite-sized pieces.",
            "Toss the vegetables with the remaining marinade and spread them on a baking sheet.",
            "Place the marinated chicken breasts on the same baking sheet with the vegetables.",
            "Roast in the preheated oven for 25-30 minutes or until the chicken is cooked through and the vegetables are tender.",
            "Serve the Lemon Herb Chicken over a bed of quinoa or your favorite grain, and enjoy!"
          ],
          rating: 4.5
        },
        {
          id: 12,
          title: "Creamy Mushroom Pasta",
          image: "https://www.mushroomcouncil.com/wp-content/uploads/2017/10/P01B_Pasta-with-Creamy-Mushroom-Sauce-scaled.jpg",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          category: "dinner",
          description: "A rich and creamy pasta dish with sautéed mushrooms and herbs.",
          ingredients: [
            "8 oz pasta of your choice",
            "2 tbsp olive oil",
            "3 cloves garlic, minced",
            "8 oz mushrooms, sliced",
            "1 cup heavy cream",
            "1/2 cup grated Parmesan cheese",
            "2 tbsp fresh parsley, chopped",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Cook pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.",
            "Heat olive oil in a large skillet over medium heat. Add garlic and cook for 1 minute until fragrant.",
            "Add mushrooms and cook for 5-7 minutes until they release their liquid and become golden brown.",
            "Reduce heat to low and add heavy cream and Parmesan cheese. Stir until the cheese melts and the sauce becomes creamy.",
            "Add the cooked pasta to the skillet and toss to coat. If the sauce is too thick, add a little of the reserved pasta water.",
            "Season with salt and pepper to taste. Garnish with fresh parsley before serving."
          ],
          rating: 4.2
        },
        {
          id: 13,
          title: "Beef Tacos",
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 15,
          cookTime: 15,
          servings: 4,
          category: "dinner",
          description: "Classic beef tacos with all the favorite toppings.",
          ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "8 taco shells",
            "1 cup lettuce, shredded",
            "1 tomato, diced",
            "1 cup cheddar cheese, shredded",
            "1/2 cup sour cream",
            "1/4 cup salsa"
          ],
          instructions: [
            "Brown ground beef in a skillet, drain excess fat.",
            "Add taco seasoning and water according to package directions.",
            "Warm taco shells according to package instructions.",
            "Fill shells with beef mixture.",
            "Top with lettuce, tomato, cheese, sour cream, and salsa."
          ],
          rating: 4.6
        },
        {
          id: 14,
          title: "Salmon with Asparagus",
          image: "https://i.pinimg.com/1200x/78/51/a4/7851a48c59ee2fa1af25a695acb87899.jpg",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          category: "dinner",
          description: "Perfectly baked salmon with roasted asparagus and lemon.",
          ingredients: [
            "2 salmon fillets",
            "1 bunch asparagus",
            "2 tbsp olive oil",
            "1 lemon, sliced",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Fresh dill for garnish"
          ],
          instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place salmon and asparagus on a baking sheet.",
            "Drizzle with olive oil, season with garlic, salt, and pepper.",
            "Arrange lemon slices on salmon.",
            "Bake for 15-20 minutes until salmon flakes easily.",
            "Garnish with fresh dill before serving."
          ],
          rating: 4.7
        },
        {
          id: 15,
          title: "Vegetable Lasagna",
          image: "https://www.happyfoodstube.com/wp-content/uploads/2020/05/vegetable-lasagna-image.jpg",
          prepTime: 30,
          cookTime: 45,
          servings: 6,
          category: "dinner",
          description: "Hearty vegetable lasagna with layers of cheese and fresh vegetables.",
          ingredients: [
            "9 lasagna noodles",
            "2 cups marinara sauce",
            "2 cups ricotta cheese",
            "2 cups mozzarella cheese",
            "1/2 cup Parmesan cheese",
            "2 cups mixed vegetables (spinach, zucchini, mushrooms)",
            "1 egg",
            "2 tbsp fresh basil",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Cook lasagna noodles according to package instructions.",
            "Mix ricotta, egg, half the mozzarella, salt, and pepper.",
            "Layer sauce, noodles, ricotta mixture, and vegetables in a baking dish.",
            "Repeat layers, ending with sauce and remaining cheeses.",
            "Bake at 375°F (190°C) for 45 minutes until bubbly and golden.",
            "Let rest for 10 minutes before serving."
          ],
          rating: 4.4
        },

        // DESSERTS (5 recipes) - NOTE: category is "desserts" not "deserts"
        {
          id: 16,
          title: "Chocolate Chip Cookies",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 15,
          cookTime: 12,
          servings: 24,
          category: "desserts",
          description: "Classic chocolate chip cookies that are soft in the center and crispy on the edges.",
          ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup unsalted butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
          ],
          instructions: [
            "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
            "In a medium bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, beat butter, granulated sugar, and brown sugar until creamy.",
            "Add eggs one at a time, beating well after each addition. Beat in vanilla.",
            "Gradually beat in flour mixture. Stir in chocolate chips.",
            "Drop by rounded tablespoon onto ungreased baking sheets.",
            "Bake for 9 to 11 minutes or until golden brown. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely."
          ],
          rating: 4.8
        },
        {
          id: 17,
          title: "Berry Cheesecake",
          image: "https://static-assets-prod.fnp.com/images/pr/l/v20240925122116/midnight-blueberry-cheesecake_1.jpg",
          prepTime: 30,
          cookTime: 60,
          servings: 8,
          category: "desserts",
          description: "Creamy cheesecake with a graham cracker crust and berry topping.",
          ingredients: [
            "2 cups graham cracker crumbs",
            "1/2 cup melted butter",
            "3 packages cream cheese, softened",
            "1 cup sugar",
            "3 eggs",
            "1 tsp vanilla extract",
            "2 cups mixed berries",
            "1/4 cup sugar for topping"
          ],
          instructions: [
            "Mix graham crumbs and butter, press into springform pan.",
            "Beat cream cheese and sugar until smooth.",
            "Add eggs one at a time, then vanilla.",
            "Pour over crust and bake at 325°F (160°C) for 50-60 minutes.",
            "Cool completely, then chill for 4 hours.",
            "Top with fresh berries before serving."
          ],
          rating: 4.9
        },
        {
          id: 18,
          title: "Apple Crisp",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ob2dLxd44eZsxkAJ899AvB9DorgrOSWxow&s",
          prepTime: 20,
          cookTime: 45,
          servings: 6,
          category: "desserts",
          description: "Warm apple crisp with a crunchy oat topping, perfect with ice cream.",
          ingredients: [
            "6 apples, peeled and sliced",
            "1/2 cup sugar",
            "1 tsp cinnamon",
            "1 cup flour",
            "1 cup rolled oats",
            "1/2 cup brown sugar",
            "1/2 cup butter, cold",
            "Vanilla ice cream for serving"
          ],
          instructions: [
            "Toss apples with sugar and cinnamon, place in baking dish.",
            "Mix flour, oats, and brown sugar in a bowl.",
            "Cut in butter until mixture is crumbly.",
            "Sprinkle topping over apples.",
            "Bake at 375°F (190°C) for 45 minutes until golden.",
            "Serve warm with vanilla ice cream."
          ],
          rating: 4.5
        },
        {
          id: 19,
          title: "Chocolate Mousse",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prepTime: 20,
          cookTime: 0,
          servings: 4,
          category: "desserts",
          description: "Light and airy chocolate mousse that melts in your mouth.",
          ingredients: [
            "200g dark chocolate",
            "3 eggs, separated",
            "2 tbsp sugar",
            "1 cup heavy cream",
            "1 tsp vanilla extract",
            "Whipped cream for garnish",
            "Chocolate shavings"
          ],
          instructions: [
            "Melt chocolate in a double boiler, let cool slightly.",
            "Whisk egg yolks into melted chocolate.",
            "Whip cream with vanilla until stiff peaks.",
            "Beat egg whites with sugar until glossy peaks.",
            "Fold whipped cream into chocolate mixture, then fold in egg whites.",
            "Chill for at least 4 hours before serving.",
            "Garnish with whipped cream and chocolate shavings."
          ],
          rating: 4.7
        },
        {
          id: 20,
          title: "Lemon Bars",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MyP6ntVPclNp3WqiuUgC3YulYRkOZPF8iA&s",
          prepTime: 20,
          cookTime: 35,
          servings: 12,
          category: "desserts",
          description: "Tangy lemon curd on a buttery shortbread crust.",
          ingredients: [
            "1 cup flour",
            "1/2 cup butter, softened",
            "1/4 cup powdered sugar",
            "2 eggs",
            "1 cup sugar",
            "2 tbsp flour",
            "1/4 cup lemon juice",
            "1 tbsp lemon zest",
            "Powdered sugar for dusting"
          ],
          instructions: [
            "Mix 1 cup flour, butter, and 1/4 cup powdered sugar for crust.",
            "Press into pan and bake at 350°F (175°C) for 15 minutes.",
            "Whisk eggs, 1 cup sugar, 2 tbsp flour, lemon juice, and zest.",
            "Pour over hot crust and bake 20 minutes more.",
            "Cool completely, then dust with powdered sugar.",
            "Cut into bars and serve."
          ],
          rating: 4.6
        },

        // DRINKS (5 recipes)
        {
          id: 21,
          title: "Fresh Fruit Smoothie",
          image: "https://media.istockphoto.com/id/537522498/photo/freshly-blended-fruit-smoothies-of-various-colors-and-tastes.jpg?s=612x612&w=0&k=20&c=p-BeboePGQOBWVTCYETfCQzhMiOVyf2MVnSkV6aIUyQ=",
          prepTime: 5,
          cookTime: 0,
          servings: 2,
          category: "drinks",
          description: "Refreshing mixed fruit smoothie packed with vitamins.",
          ingredients: [
            "1 banana",
            "1 cup mixed berries",
            "1/2 cup orange juice",
            "1/2 cup Greek yogurt",
            "1 tbsp honey",
            "1 cup ice cubes",
            "Mint leaves for garnish"
          ],
          instructions: [
            "Combine all ingredients in a blender.",
            "Blend until smooth and creamy.",
            "Add more ice if too thin, or more juice if too thick.",
            "Pour into glasses and garnish with mint.",
            "Serve immediately."
          ],
          rating: 4.4
        },
        {
          id: 22,
          title: "Iced Matcha Latte",
          image: "https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg",
          prepTime: 5,
          cookTime: 0,
          servings: 1,
          category: "drinks",
          description: "Creamy iced matcha latte with natural energy boost.",
          ingredients: [
            "1 tsp matcha powder",
            "2 tbsp hot water",
            "1 cup milk (any type)",
            "1-2 tsp honey or maple syrup",
            "Ice cubes",
            "Whipped cream (optional)"
          ],
          instructions: [
            "Whisk matcha powder with hot water until frothy.",
            "Fill a glass with ice cubes.",
            "Pour milk over ice.",
            "Add sweetener to taste.",
            "Pour matcha mixture over milk.",
            "Top with whipped cream if desired."
          ],
          rating: 4.3
        },
        {
          id: 23,
          title: "Mango Lassi",
          image: "https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg",
          prepTime: 5,
          cookTime: 0,
          servings: 2,
          category: "drinks",
          description: "Creamy Indian yogurt drink with sweet mango flavor.",
          ingredients: [
            "1 cup ripe mango, cubed",
            "1 cup plain yogurt",
            "1/2 cup milk",
            "2 tbsp honey or sugar",
            "1/4 tsp cardamom powder",
            "Ice cubes",
            "Mint leaves for garnish"
          ],
          instructions: [
            "Combine mango, yogurt, milk, and honey in blender.",
            "Blend until smooth and creamy.",
            "Add cardamom and blend briefly.",
            "Pour over ice cubes in glasses.",
            "Garnish with mint leaves and serve chilled."
          ],
          rating: 4.7
        },
        {
          id: 24,
          title: "Strawberry Lemonade",
          image: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/strawberry-Lemonade-1-2.jpg?resize=740%2C760&ssl=1",
          prepTime: 10,
          cookTime: 0,
          servings: 4,
          category: "drinks",
          description: "Fresh strawberry lemonade with natural sweetness.",
          ingredients: [
            "2 cups fresh strawberries",
            "1 cup lemon juice (about 4-6 lemons)",
            "1/2 cup sugar or honey",
            "4 cups cold water",
            "Ice cubes",
            "Lemon slices and strawberry halves for garnish"
          ],
          instructions: [
            "Blend strawberries until smooth.",
            "Strain through fine mesh to remove seeds.",
            "Mix strawberry puree with lemon juice and sugar.",
            "Add cold water and stir until sugar dissolves.",
            "Serve over ice with lemon slices and strawberry garnish.",
            "Adjust sweetness to taste."
          ],
          rating: 4.5
        },
        {
          id: 25,
          title: "Hot Chocolate",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Dwm2ML1clruSQvBE4zfyCelG9FA6ssLoNA&s",
          prepTime: 5,
          cookTime: 10,
          servings: 2,
          category: "drinks",
          description: "Rich and creamy hot chocolate for cozy moments.",
          ingredients: [
            "2 cups milk",
            "1/4 cup cocoa powder",
            "1/4 cup sugar",
            "1/4 cup chocolate chips",
            "1/2 tsp vanilla extract",
            "Pinch of salt",
            "Whipped cream and marshmallows for topping"
          ],
          instructions: [
            "Heat milk in saucepan over medium heat.",
            "Whisk in cocoa powder and sugar until dissolved.",
            "Add chocolate chips and stir until melted.",
            "Stir in vanilla and salt.",
            "Pour into mugs and top with whipped cream and marshmallows.",
            "Serve warm."
          ],
          rating: 4.8
        }
      ];
      
      setRecipes(sampleRecipes);
      localStorage.setItem('recipes', JSON.stringify(sampleRecipes));
      console.log("Loaded sample recipes:", sampleRecipes.length);
    }
  }, []);

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const updateRecipeRating = (recipeId, newRating) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, rating: newRating } : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route 
            path="/recipes" 
            element={
              <Recipes 
                recipes={recipes} 
                onUpdateRating={updateRecipeRating}
                onAddRecipe={addRecipe}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;