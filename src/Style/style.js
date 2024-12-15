import styled,{keyframes} from "styled-components";

export const InputElement = styled.input`
  padding: 5px 10px ;
  display: ${(props) => props.display} || block;
  margin: 10px 0px 10px;
`;

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

export const ButtonElement = styled.button`
  padding: 5px 15px;
  width: fit-content;
  display: block;
  background-color: ${(props) => props.backgruoundcolor || "#DD0023"};
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  transition: 0.1s;
  color:#ffffff;
  color: ${(props)=>props.color} || #ffffff;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.1s;
  }
`;

export const FormContainer = styled.form`
  max-width: fit-content;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:90%;
  color: #fff;
  text-align: center;
  border-radius: 15px; 
  animation: ${slideInAndRotate} 0.5s ease-out forwards;
  // background-image:radial-gradient(circle at top left,rgb(226,1,29),rgb(25,49,91));
`;

export const LabelElement = styled.label`
  text-align: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px auto;
  postion: relative;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;  /* Take the full height of the viewport */
    background-image: url("../assets/bg-ship.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`
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
    height: 60px;
    transition: 0.2s;
    margin:20px 0px 20px 0px;
    &:hover{
    transform: scale(1.1);
    transition-duration: 0.2s; 
    }
`
export const RowCenterContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-right: 10%;
`