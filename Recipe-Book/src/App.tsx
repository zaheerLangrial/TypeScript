import React, { useState } from "react";
import { Button, Input, Typography } from "antd";
import RecipePic from "./assets/pic.jpg";
import RecipeList from "./components/RecipeList";

const recipeBook: { title: string; image: string }[] = [
  {
    title: "Spaghetti Bolognese",
    image: RecipePic,
  },
  {
    title: "Chicken Alfredo Pasta",
    image: RecipePic,
  },
  {
    title: "Vegetarian Stir-Fry",
    image: RecipePic,
  },
  {
    title: "Chocolate Chip Cookies",
    image: RecipePic,
  },
];

const App: React.FC = () => {
  const [input , setInput] = useState('')
  const [recipes, setRecipes] =
    useState<{ title: string; image: string }[]>(recipeBook);
    const handleSearch = () => {
      const searchRecipe = recipes.filter((recipe) => recipe.title.toLowerCase().includes(input.toLowerCase()))
      setRecipes(searchRecipe)
    }
  return (
    <>
      <div className=" max-w-xl mx-auto px-3">
        <Typography.Title level={1} type="success" className="text-center">
          Recipe Book
        </Typography.Title>
        <Input placeholder="Search...." value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <br />
        <Button type="primary" danger onClick={handleSearch}>
          Search
        </Button>
        <Input type="file" />
      </div>
      <div className=" max-w-6xl mx-auto p-5 ">
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
};

export default App;
