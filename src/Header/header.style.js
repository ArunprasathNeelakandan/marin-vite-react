import styled from "styled-components";

export const LogoInput = styled.img`
    height: 50px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
`