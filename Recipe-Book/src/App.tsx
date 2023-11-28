// App.tsx
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import { Input, Button, Typography } from 'antd';
import ChickenImg from './assets/pic.jpg'

const { Title } = Typography;

const recipeBook = [
  {
    title: 'Spaghetti Bolognese',
    image: ChickenImg,
  },
  {
    title: 'Chicken Alfredo Pasta',
    image: ChickenImg,
  },
  {
    title: 'Vegetarian Stir-Fry',
    image: ChickenImg,
  },
  {
    title: 'Chocolate Chip Cookies',
    image: ChickenImg,
  },
  // Add more recipes as needed
];


const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<{ title: string; image: string }[]>(recipeBook);

  // const apiKey = 'YOUR_EDAMAM_API_KEY'; // Replace with your Edamam API key

  const searchRecipes = () => {
    const searchRecipe = recipes.filter((dish) => dish.title.toLowerCase().includes(query.toLowerCase()))
    if(searchRecipe) {
      setRecipes(searchRecipe)
    }else {
      console.log('Cannot Found Any Recipe.....')
      alert('Cannot Found Any Recipe.....')
    }
   setQuery('')
  };

  return (
    <>
    <div className=" max-w-xl mx-auto p-4">
      <Title level={2} className="mb-4">
        Recipe Book
      </Title>
      <div className="flex items-center mb-4">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredient or dish"
        />
        <Button type="text" className="ml-2" onClick={searchRecipes}>
          Search
        </Button>
      </div>
      </div>
      <div className=' max-w-7xl mx-auto'>
      <RecipeList recipes={recipes} /> 
      </div>
      </>

  );
};

export default App;
