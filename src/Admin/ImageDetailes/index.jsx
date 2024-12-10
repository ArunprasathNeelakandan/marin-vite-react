import { SerialDeatailCart } from "./ImageDetailes.js";
import { ButtonElement, CenteredContainer } from "../../../style.js";
import { jwtToken } from "../../commonFunction.js";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageDetailes = (props) => {
  const { setAlertMsg, each } = props;

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
      setAlertMsg("success", result.message);
    } catch (error) {
      setAlertMsg("error", "Error deleting file");
    }
  };

  return (
    <SerialDeatailCart key={each.serialNumber}>
      <p>{each.serial_number}</p>
      <ButtonElement
        backgruoundcolor="#DD0023"
        onClick={() => handleDelete(each.serial_number)}
      >
        Delete
      </ButtonElement>
    </SerialDeatailCart>
  );
};

export default ImageDetailes;
