import { useState } from "react";
import Header from "../Header";
import { ToastContainer, toast } from "react-toastify";
import {
  InputElement,
  FormContainer,
  ButtonElement,
  LabelElement,
} from "../../style";

import ShowImage from "../Show Image/index.jsx";
import { HomeContainer } from "./home.js";

const Home = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [filePath, setFilePath] = useState(null);

  const handleInputChange = (e) => {
    setSerialNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serialNumber) {
      toast.warn("Please enter a serial number.");
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
        setFilePath(result.file_path);
        // setSerialNumber('')
        return;
      } else {
        const result = await response.json();
        toast.error(result.message);
        setFilePath(null);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      alert("Error fetching image");
    }
  };

  const assignFilePath = (value) => {
    setFilePath(value);
  };

  return (
    <HomeContainer>
      <Header />

      <FormContainer onSubmit={handleSubmit}>
        <LabelElement>CERTIFICATE SERIAL NUMBER</LabelElement>
        <p>eg: xx/xxxx/xxxx</p>
        <InputElement
          onChange={handleInputChange}
          placeholder="CERTIFICATE SERIAL NUBER"
          value={serialNumber}
        ></InputElement>
        <ButtonElement type="submit">VIEW</ButtonElement>
      </FormContainer>
      <ToastContainer
        position="top-center"
        style={{
          top: "50%",
          zIndex: 9999, 
        }}
      />

      {filePath && (
        <ShowImage filePath={filePath} assignFilePath={assignFilePath} />
      )}
    </HomeContainer>
  );
};

export default Home;
