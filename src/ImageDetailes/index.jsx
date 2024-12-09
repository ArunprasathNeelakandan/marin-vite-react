import { SerialDeatailCart } from "./ImageDetailes.js";
import { ButtonElement } from "../../style";
import { jwtToken } from "../commonFunction.js";


const ImageDetailes = (props) => {

    const {isDeleted,each} = props

    const handleDelete = async (serialNumber) => {
        try {
          const res = await fetch("http://localhost:3000/file/images", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify({ serialNumber }),
          });
          const result = await res.json();
          isDeleted(res.ok,result)
        } catch (error) {
            alert("Error deleting file");
        }
      };

    return (
      <SerialDeatailCart key={each.serial_number}>
        <p>{each.serial_number}</p>
        <ButtonElement
          backgruoundcolor="#e34b55"
          onClick={() => handleDelete(each.serial_number)}
        >
          Delete
        </ButtonElement>
      </SerialDeatailCart>
    );
  };
  
  export default ImageDetailes