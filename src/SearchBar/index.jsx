import { useState } from "react";
import { FiSearch } from "react-icons/fi";

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
      alert("Error fetching image");
    }
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
        />
        <SearchButton type="submit" value={serialNumber}>
          🔍
        </SearchButton>
      </SearchWrapper>
    </FormContainer>
  );
};

export default SearchBar;
