import styled from "styled-components";

export const SerialDeatailCart = styled.div`
   display: flex;
  padding: 10px;
  background-color: rgba(26, 48, 87, 0.425);
  width: calc(33.33% - 20px);
  align-items: center; 
  justify-content: space-between;
  margin: 20px 10px;

  @media (max-width: 1200px) {
    width: calc(50% - 20px); /* 2 items per row on medium devices */
  }

  @media (max-width: 768px) {
    width: 100%; /* 1 item per row on small devices */
  }
`;