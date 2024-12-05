import { useState } from "react";
import Header from "../Header";
import "./home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  const [serialNumber, setSerialNumber] = useState(""); // State to store the serial number
  const [image, setImage] = useState(null); // State to store the fetched image

  // Handle serial number input change
  const handleInputChange = (e) => {
    setSerialNumber(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!serialNumber) {
      alert("Please enter a serial number.");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await fetch(`http://localhost:3000/file/images`,{method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify({serialNumber,})})
      

      if (response.ok) {
        // const result = await response.json();
        const result = await response.json()
        
        // Assuming the result contains the image path or data
        setImage(result.file_path); // Assuming the server sends the image URL
      } else {
        alert("No image found for this serial number.");
        setImage(null);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      alert("Error fetching image");
    }
  };

  return (
    <div className="home-bg">
      <Header />
      <form onSubmit={handleSubmit}className="home-form-container">
        <input
          type="text"
          className="home-input"
          placeholder="Enter Product Serial Number"
          value={serialNumber}
          onChange={handleInputChange}
        />
        <button type="submit">Get Image</button>
      </form>

      {image && (
        <div className="image-container">
          <img src={`http://localhost:3000${image}`} alt="Product" className="product-image" />
        </div>
      )}
    </div>
  );
};

export default Home;