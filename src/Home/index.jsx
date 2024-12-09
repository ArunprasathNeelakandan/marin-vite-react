import { useState } from "react";
import Header from "../Header";
import {
  CenteredContainer,
  InputElement,
  FormContainer,
  ButtonElement,
  LabelElement,
} from "../../style";
import ShowImage from "../Show Image/index.jsx";
import { HomeImgElement, HomeContainer } from "./home.js";


const Home = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
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
      console.log(response);
      if (response.status === 200) {
        const result = await response.json();
        setImage(result.file_path);
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

  return (
    <HomeContainer>
      <Header />

      <FormContainer onSubmit={handleSubmit}>
        <LabelElement>CERTIFICATE SERIAL NUMBER</LabelElement>
        <InputElement
          onChange={handleInputChange}
          placeholder="CERTIFICATE SERIAL NUBER"
        ></InputElement>
        <ButtonElement type="submit">VIEW</ButtonElement>
      </FormContainer>

      {image && (<ShowImage filePath={image}/>) }
    </HomeContainer>
  );
};

export default Home;
