import styled from "styled-components";


export const AdminBg = styled.div`
    min-height: 100vh;
    min-width:100vw;
    display:flex;
    flex-direction: column;   
`
export const HeaderContainer = styled.div`
   display: flex;
   background: rgba(89, 107, 139, 0.259);
   width: 100%;
   justify-content: space-between;
   align-items: center;
   padding: 0px 50px 0px 50px;
   flex-grow:0;
`

export const AdminSideparAndImagePar =styled.div`
    display:flex;
    width:100%;
    flex-grow:2;
    
`

export const SidePar = styled.div`
    padding: 10px 20px 10px 20px;
    // background-color:  #1A3059;
    background: rgba(89, 107, 139, 0.259);
    width:20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`
export const ImageTablesContainer = styled.div`
    width: 80%;
`
export const TableContainer = styled.div`
  width: 80%;
  margin: 20px 10%;
  overflow-x: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;
  background: white;

  th {
    padding: 12px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  td {
    padding: 5px 10px;
    border: 2px solid #ddd;
    margin: 1px 1px 1px px;

  }

  th {
    background: #f4f4f4;
    font-weight: bold;
    text-transform: uppercase;
  }

  tr:hover {
    background: #f9f9f9;
  }

  td:last-child, th:last-child {
    text-align: center;
  }
button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .view-btn {
    background: #4CAF50;
    color: white;
  }

  .delete-btn {
    background: #DD0023;
    color: white;
  }
`;