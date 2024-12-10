import styled from "styled-components";

export const SerialDeatailCart = styled.div`
  display: flex;
  padding: 10px;
  background-color: #0b69ff;
  color: #ffffff;
  width: calc(20% - 10px);
  align-items: center;
  margin: 10px 5px 10px 5px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: calc(50%); /* 2 items per row on medium devices */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
