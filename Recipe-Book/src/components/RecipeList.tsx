import { Col, Row } from "antd";
import React from "react";
import Recipe from "./Recipe";

type recipeListProps = {
  recipes: { title: string; image: string }[];
};

const RecipeList: React.FC<recipeListProps> = ({ recipes }) => {
  return (
    <Row gutter={[16, 16]} justify={"center"}>
      {recipes.map((recipe, index) => {
        return (
          <Col key={index}>
            <Recipe title={recipe.title} image={recipe.image} />
          </Col>
        );
      })}
    </Row>
  );
};

export default RecipeList;
