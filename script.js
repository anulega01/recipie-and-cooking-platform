// Sample recipe data
const recipes = [
    {
        title: 'Spaghetti Bolognese',
        ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
        instructions: 'Cook the spaghetti. Brown the beef with onion and garlic. Add tomato sauce. Mix with cooked spaghetti.'
    },
    {
        title: 'Chicken Stir Fry',
        ingredients: ['chicken breast', 'broccoli', 'soy sauce', 'ginger', 'garlic'],
        instructions: 'Stir-fry chicken with broccoli, soy sauce, ginger, and garlic. Serve over rice.'
    },
    // Add more recipes as needed
];

// Function to display recipes
function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');

    // Loop through each recipe and create HTML elements
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${recipe.instructions}`;

        // Append elements to the recipe container
        recipeDiv.appendChild(title);
        recipeDiv.appendChild(ingredients);
        recipeDiv.appendChild(instructions);

        recipeContainer.appendChild(recipeDiv);
    });
}

// Call the displayRecipes function when the page is fully loaded
document.addEventListener('DOMContentLoaded', displayRecipes);

// Sample data for featured recipes
const featuredRecipes = [
    {
        title: 'Grilled Salmon',
        ingredients: ['salmon fillet', 'lemon', 'olive oil', 'salt', 'pepper'],
        instructions: 'Marinate salmon with lemon, olive oil, salt, and pepper. Grill until cooked through.'
    },
    {
        title: 'Vegetarian Pizza',
        ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'bell peppers', 'olives'],
        instructions: 'Spread tomato sauce on the pizza dough. Top with cheese, bell peppers, and olives. Bake until crust is golden.'
    },
    // Add more featured recipes as needed
];

// Function to display featured recipes
function displayFeaturedRecipes() {
    const featuredContainer = document.getElementById('featured-container');

    // Loop through each featured recipe and create HTML elements
    featuredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${recipe.instructions}`;

        // Append elements to the featured container
        recipeDiv.appendChild(title);
        recipeDiv.appendChild(ingredients);
        recipeDiv.appendChild(instructions);

        featuredContainer.appendChild(recipeDiv);
    });
}

// Call the displayFeaturedRecipes function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes();
    displayFeaturedRecipes();
});