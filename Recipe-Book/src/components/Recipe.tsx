import React from 'react';
import { Card } from 'antd';

interface RecipeProps {
  title: string;
  image: string;
}

const Recipe: React.FC<RecipeProps> = ({ title, image }) => {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt={title} src={image} />}>
      <Card.Meta title={title} />
    </Card>
  );
};

export default Recipe;
