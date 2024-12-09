import { useEffect, useState, useCallback, useRef } from "react";
import Header from "../Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {
  SearchIcon,
} from "./searchbar.style.js";
import {
  InputElement,
  CenteredContainer,
  ButtonElement,
  FormContainer,
  LabelElement,
  WarningMsg,
} from "../../style.js";

const SearchBar = (props) => {

    const [serialNumber, setSerialNumber] = useState("");
    const {assignFilePath} = props

    const handleInputChange = (e) => {
      assignFilePath('')
      setSerialNumber(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!serialNumber) {
        alert("Please enter a serial number.");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:3000/file/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ serialNumber }),
        });
        if (response.status === 200) {
          const result = await response.json();
          assignFilePath(result.file_path);
        } else {
          const result = await response.json();
          alert(result.message);
          setImage(null);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        alert("Error fetching image");
      }
    };


    return(
        <FormContainer onSubmit={handleSubmit}>
          <LabelElement>SEARCH</LabelElement>
          <CenteredContainer>
          <InputElement onChange={handleInputChange}  placeholder="SEARCH" type="search" display='inline'/>
          <SearchIcon type='submit' value={serialNumber}>
            <FiSearch /> 
          </SearchIcon>
          </CenteredContainer>
        </FormContainer>
    )
}

export default SearchBar