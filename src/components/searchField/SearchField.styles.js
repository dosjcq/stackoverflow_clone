import styled from 'styled-components';

export const SearchForm = styled.form`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 100px;
  height: 42px;
  border: none;
  background: #7ba7ab;
  border: 2px solid #7ba7ab;

  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: lightgray;
    color: lightslategrey;
  }
`;
