import React from 'react';

import { Tag, TagsContainer } from './Tags.styles';

export const Tags = ({ tags }) => {
  const tagElements = (arr) => {
    if (arr.length === 0) {
      return <p>Теги не найдены</p>;
    }

    return arr.map((el) => {
      return (
        <Tag key={el}>
          <p>{el}</p>
        </Tag>
      );
    });
  };

  const elements = tagElements(tags);

  return <TagsContainer>{elements}</TagsContainer>;
};
