import styled, {keyframes} from "styled-components";

const shack = keyframes`
  0% {
    transform: translateX(-100%); /* Start off-screen and rotated */
    opacity: 0; /* Start invisible */
  }
     70% {
    transform: translateX(+30px); /* Start off-screen and rotated */
    opacity: 0.9; /* Start invisible */
  }
  100% {
    transform: translateX(0) ; /* End at normal position with no rotation */
    opacity: 1; /* Fully visible */
  }
`;
export const LogoInput = styled.img`
    height: 50px;
    transition: 0.2s;
    &:hover{
    transform: scale(1.1);
    transition-duration: 0.2s;
    
    }
`
export const HeaderContainer = styled.div`
     background-color: azure;
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    align-items: center;
    position: stickey; 
    top: 0%;
    width: 100vw;
    z-index: 1;
`