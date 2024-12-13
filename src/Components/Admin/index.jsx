import { useState, useRef } from "react";
import Header from "../Header/index.jsx";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { uploadFile,getImageByNumber } from "../../Services/api.js";
import "react-toastify/dist/ReactToastify.css";
import ShowImage from "../Show Image/index.jsx";
import GetAllImages from "../GetAllImages/getAllImages.jsx";
import {
  SearchWrapper,
  SearchButton,
  SearchInput,
} from "../../Style/searchbar.style.js";
import {
  InputElement,
  CenteredContainer,
  ButtonElement,
  FormContainer,
  LabelElement,
} from "../../Style/style.js";

const Admin = () => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [searchSerialNumber, setSearchSerialNumber] = useState("");
  const [triggerFetchData, setTriggerFetchData] = useState(false);
  const fileInputRef = useRef(null);

  const jwtToken = Cookies.get("jwt_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !serialNumber)
      return toast.warn("Please provide both an ID and a file.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serialNumber", serialNumber);

    const response = await uploadFile(formData, jwtToken);
    if (response.success) {
      toast.success("File uploaded successfully!");
      fileInputRef.current.value = "";
      setTriggerFetchData(!triggerFetchData);
      setSerialNumber("");
      setFile(null);
    } else {
      toast.error(response.message);
    }
  };

  const assignFilePath = (value) => {
    setFilePath(value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    console.log("aa");

    if (!searchSerialNumber) {
      toast.warn("Please enter a serial number.");
      return;
    }

    const data = await getImageByNumber(searchSerialNumber);
    data.file_path ? setFilePath(data.file_path) : toast.error(data);
  };

  return (
    <>
      <Header />
      <div>
        <CenteredContainer>
          <FormContainer onSubmit={handleSubmit}>
            <LabelElement>CERTIFICATE & PRODUCT SERIAL NUMBER</LabelElement>
            <InputElement
              onChange={(e) => setSerialNumber(e.target.value)}
              placeholder="SERIAL NUMBER"
              value={serialNumber}
            />
            <LabelElement>CERTIFICATE</LabelElement>
            <InputElement
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileInputRef}
            />
            <CenteredContainer>
              <ButtonElement backgruoundcolor="green" type="submit">
                Add
              </ButtonElement>
            </CenteredContainer>
          </FormContainer>
          <ToastContainer
            position="top-center"
            style={{
              top: "50%",
              zIndex: 9999,
            }}
          />

          <FormContainer onSubmit={handleSearchSubmit}>
            <LabelElement>CERTIFICATE SERIAL NUMBER</LabelElement>
            <p>eg: xx/xxxx/xxxx</p>
            <SearchWrapper>
              <SearchInput
                placeholder="Search..."
                onChange={(e) => setSearchSerialNumber(e.target.value)}
                type="search"
                display="inline"
                value={searchSerialNumber}
              />
              <SearchButton type="submit" value={serialNumber}>
                🔍
              </SearchButton>
            </SearchWrapper>
          </FormContainer>
        </CenteredContainer>
        {filePath && (
          <ShowImage filePath={filePath} assignFilePath={assignFilePath} />
        )}
        <GetAllImages triggerFetchData={triggerFetchData} />
      </div>
    </>
  );
};

export default Admin;
