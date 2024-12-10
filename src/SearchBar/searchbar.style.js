
import styled from "styled-components";


export const SearchIcon = styled.button`
  display: flex;
  font-size: 20px;
  color: #aaa;
  align-Items: center
  justify-content: center;
  background-color: white;
  padding: 4px 10px;
  margin: 11px 0px 20px;
  cursor: pointer;
  border: solid 1px black;
  &:hover{
  background-color: blue;
  } 
`;



export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  flex-grow: 1;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;