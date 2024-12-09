import { useEffect, useState, useCallback, useRef } from "react";
import Header from "../Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import SearchBar from "../SearchBar/index.jsx";
import ShowImage from "../Show Image/index.jsx";
import ImageDetailes from "../ImageDetailes/index.jsx";
import {
  SerialDeatailCart,
  SerialDeatailCartContainer,
} from "./admin.style.js";
import {
  InputElement,
  CenteredContainer,
  ButtonElement,
  FormContainer,
  LabelElement,
  WarningMsg,
} from "../../style.js";

const Admin = () => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [imgList, setImgList] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const [resultColor, setResultColor] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  const showAlertMsg = () => {
    setTimeout(() => setAlertMsg(""), 3000);
  };

  const getImages = useCallback(async () => {
    if (!jwtToken) return;
    try {
      const res = await fetch("http://localhost:3000/file/images", {
        method: "GET",
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      const data = await res.json();
      res.ok ? setImgList(data) : showError(data.message);
    } catch (error) {
      showError("Error fetching images");
    }
  }, [jwtToken]);

  useEffect(() => {
    if (!jwtToken) navigate("/admin/login");
    else getImages();
  }, [jwtToken, getImages]);

  const showError = (message) => {
    setAlertMsg(message);
    setResultColor("red");
    showAlertMsg();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !serialNumber)
      return showError("Please provide both an ID and a file.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serialNumber", serialNumber);

    try {
      const res = await fetch("http://localhost:3000/file/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${jwtToken}` },
        body: formData,
      });
      const result = await res.json();
      res.ok
        ? (setAlertMsg("File uploaded successfully"),
          setResultColor("green"),
          getImages(),
          (fileInputRef.current.value = ""),
          setSerialNumber(""))
        : showError(result.message);
    } catch (error) {
      showError("Error uploading file");
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleInputChange = (e) => setSerialNumber(e.target.value);

  const assignFilePath = (value) => {
    setFilePath(value);
  };

  const isDeleted = (isSuccess,result) => {
    isSuccess ? (setAlertMsg("File deleted successfully"),
    setResultColor("green"),
    getImages())
  : showError(result.message);
  };

  return (
    <>
      <Header />
      <div className="admin-bg">
        <CenteredContainer>
          <FormContainer onSubmit={handleSubmit}>
            <LabelElement>CERTIFICATE & PRODUCT SERIAL NUMBER</LabelElement>
            <InputElement
              onChange={handleInputChange}
              placeholder="SERIAL NUMBER"
              value={serialNumber}
            />
            <LabelElement>CERTIFICATE</LabelElement>
            <InputElement
              onChange={handleFileChange}
              type="file"
              ref={fileInputRef}
            />
            <CenteredContainer>
              <ButtonElement type="submit">Add</ButtonElement>
            </CenteredContainer>
            {alertMsg && (
              <WarningMsg color={resultColor}>{alertMsg}</WarningMsg>
            )}
          </FormContainer>
          <SearchBar assignFilePath={assignFilePath}></SearchBar>
        </CenteredContainer>
        {filePath && <ShowImage filePath={filePath} />}
        <SerialDeatailCartContainer>
          {imgList.map((each,index) => (
            <ImageDetailes isDeleted={isDeleted} each={each} key={index}/>
          ))}
        </SerialDeatailCartContainer>
      </div>
    </>
  );
};

export default Admin;
