import { Card } from "antd";
import React from "react";

type recipeProps = {
  title: string;
  image: string;
};

const Recipe: React.FC<recipeProps> = ({ title, image }) => {
  return (
    <Card
      hoverable
      className="w-[240px]"
      cover={<img alt="Recipe Pic" src={image} />}
    >
      <Card.Meta title={title} />
    </Card>
  );
};

export default Recipe;
