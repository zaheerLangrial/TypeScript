import React from 'react';
import Recipe from './Recipe';
import { Row, Col } from 'antd';

interface RecipeListProps {
  recipes: { title: string; image: string }[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {recipes.map((recipe, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Recipe title={recipe.title} image={recipe.image} />
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList;
