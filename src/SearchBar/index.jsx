import { useState } from "react";
import { toast } from "react-toastify";

import {
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./searchbar.style.js";
import {
  FormContainer,
  LabelElement,
} from "../../style.js";

const SearchBar = (props) => {
  const [serialNumber, setSerialNumber] = useState("");
  const { assignFilePath } = props;

  const handleInputChange = (e) => {
    setSerialNumber(e.target.value);
  };

  if (serialNumber === "") {
    assignFilePath("");
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serialNumber) {
      toast.warn("Please enter a serial number.");
      return;
    }

    
      const response = await fetch(`http://localhost:3000/file/images`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serialNumber }),
      });
      if (response.status === 200) {
        const result = await response.json();
        assignFilePath(result.file_path);
        return ;
      } else {
        const result = await response.json();
        toast.error(result.message);
        setImage(null);
        return;
      }
      return ;
    
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelElement>CERTIFICATE SERIAL NUMBER</LabelElement>
      <p>eg: xx/xxxx/xxxx</p>
      <SearchWrapper>
        <SearchInput
          placeholder="Search..."
          onChange={handleInputChange}
          type="search"
          display="inline"
          value={serialNumber}
        />
        <SearchButton type="submit" value={serialNumber}>
          🔍
        </SearchButton>
      </SearchWrapper>
    </FormContainer>
  );
};

export default SearchBar;
