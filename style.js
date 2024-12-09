import styled from "styled-components";


export const InputElement = styled.input`
    padding: 5px 10px;
    display: ${(props)=>props.display} || block;
    margin: 10px 0px 20px;
`;

export const ButtonElement = styled.button`
    padding: 5px 15px;
    width: fit-content;
    display: block;
    background-color: ${(props)=>props.backgruoundcolor || 'aqua'} ;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    transition: 0.1s;

    &:hover {
        transform: scale(1.05);
        transition-duration: 0.1s;
    }
`

export const FormContainer = styled.form`
    border: solid 2px #DE0122;
    max-width: max-content;
    padding: 20px 40px;
    margin: 10px auto;
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(99, 207, 221);
    flex-shrink: 0;
`

export const LabelElement = styled.label`
    text-align: center;
`

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%; 
  flex-wrap: wrap;
`;

export const WarningMsg = styled.p`
    color: ${(props)=>props.color};
    font-size: 1.1rem;
    margin:10px;
` 
