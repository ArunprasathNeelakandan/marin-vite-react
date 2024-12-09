import styled from "styled-components"

export const HomeImgElement = styled.img`
    flex-grow: 1;  
  width: 90%;
  object-fit: contain;  
  object-position: center; 
  display: block;  
  max-height: calc(100vh - 300px);
  margin: 0 5% 0 5%;
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;  /* Take the full height of the viewport */
`