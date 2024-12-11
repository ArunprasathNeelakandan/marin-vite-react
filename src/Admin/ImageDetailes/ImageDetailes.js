
import styled, { keyframes } from "styled-components";

// Define the animation for sliding out and rotating
const slideInAndRotate = keyframes`
  0% {
    transform: translateX(-100%) rotate(-180deg); /* Start off-screen and rotated */
    opacity: 0; /* Start invisible */
  }
  100% {
    transform: translateX(0) rotate(0deg); /* End at normal position with no rotation */
    opacity: 1; /* Fully visible */
  }
`;

export const SerialDeatailCart = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: #1A3059;
  color: #ffffff;
  width: calc(25% - 10px);
  align-items: center;
  margin: 10px 5px 10px 5px;
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

