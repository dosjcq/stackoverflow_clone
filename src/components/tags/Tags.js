import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  background-color: #7ba7ab;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tags = ({ tags }) => {
  const tagElements = (arr) => {
    if (arr.length === 0) {
      return <p>Теги не найдены</p>;
    }

    return arr.map((el) => {
      return (
        <Tag>
          <p>{el}</p>
        </Tag>
      );
    });
  };

  const elements = tagElements(tags);

  return <TagsContainer>{elements}</TagsContainer>;
};
