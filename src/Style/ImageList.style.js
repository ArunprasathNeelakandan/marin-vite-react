
import styled, { keyframes } from "styled-components";

const slideInAndRotate = keyframes`
  0% {
    scale:0;
    opacity: 0; /* Start invisible */
  }
  100% {
    scale:1;
    opacity: 1; /* Fully visible */
  }
`;

export const SerialDeatailCart = styled.div`
  display: flex;
  padding: 10px 20px;
   background-image:conic-gradient(from 45deg,rgb(25,49,91),rgb(226,1,29));
  // background: conic-gradient(from 45deg, red, yellow, green);
  color: #ffffff;
  width: calc(25% - 10px);
  align-items: center;
  margin: 5px 5px 0px 5px;
  justify-content: space-between;
  border-radius: 10px;
  border: solid 1px #fff;
  height: 50px;
  animation: ${slideInAndRotate} 0.5s ease-out forwards; /* Apply animation */

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* 2 items per row on medium devices */
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SerialDeatailCartContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  margin: 0 5% 0px 5%;
  width:90%;
  min-height: 20vh;
`

export const PageContainer = styled.div`
  padding: 5px 10px;
`

export const ListPageArrowContainer =styled.div `
    display: flex;
    justify-content: center;   
    position: absolute;
    top: 90%;
`

