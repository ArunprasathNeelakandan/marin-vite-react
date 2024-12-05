// import { useEffect, useState } from "react";
// import Header from "../Header";
// import "./admin.css";
// import Cookies from "js-cookie";
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";

// const Admin = () => {
//   const [file, setFile] = useState(null);
//   const [serialNumber, setSerialNumber] = useState("");
//   const [imgList, setImgList] = useState([]);

//   const navigate = useNavigate();

//   const jwt_token = Cookies.get("jwt_token");

//   useEffect(() => {
//     if (jwt_token === undefined) {
//       navigate("/admin/login");
//     }
//   }, [jwt_token]);

//   useEffect(() => {
//     getImages();
//   }, []);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     // setFileName(selectedFile.name);
//   };

//   const getImages = async () => {
//     const url = "http://localhost:3000/file//images";
//     const res = await fetch(url);
//     const data = await res.json();
//     setImgList(data);
//   };

//   // Upload the file to the server
//   // const uploadFile = async (e) => {
//   //   e.preventDefault();
//   //   if (!file || !serialNumber) {
//   //     alert('Please provide both an ID and a file.');
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append("file", file);
//   //   formData.append('serialNumber',serialNumber) // 'file' is the key expected by multer in the server

//   //   try {
//   //     const response = await fetch("http://localhost:3000/file/upload", {
//   //       method: "POST",
//   //       body: formData, // send FormData directly
//   //     });

//   //     if (response.ok) {
//   //       const result = await response.json();
//   //       alert("File uploaded successfully");
//   //       setFile(null);
//   //       getImages();
//   //       console.log(result);
//   //     } else {
//   //       alert("File upload failed");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error uploading file:", error);
//   //     alert("Error uploading file");
//   //   }
//   // };
//   const uploadFile = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     if (!file || !serialNumber) {
//       alert('Please provide both an ID and a file.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("serialNumber", serialNumber);
  
//     try {
//       const response = await fetch("http://localhost:3000/file/upload", {
//         method: "POST",
//         body: formData,
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         alert("File uploaded successfully");
//         setFile(null);
//         getImages(); // Refresh image list after upload
//         console.log(result);
//       } else {
//         alert("File upload failed");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Error uploading file");
//     }
//   };
  

//   return (
//     <>
//       <Header />
//       <div className="admin-bg">
//         <form onSubmit={uploadFile} className="admin-input-container">
//           <div>
//             <label htmlFor="imag-input">IMAGE</label>
//             <input
//               onChange={handleFileChange}
//               type="file"
//               className="admin-input"
//               placeholder="Image Url"
//               id="imag-input"
//             />
//           </div>
//           <div>
//             <label htmlFor="imag-input">IMAGE</label>
//             <input
//               type="text"
//               placeholder="PRODUCT SERIAL NO"
//               className="admin-input"
//               onChange={(e)=>{setSerialNumber(e.target.value);}}
//             />
//           </div>

//           <button type="submit" className="admin-post-btn">
//             ADD
//           </button>
//         </form>
//         <div className="admin-img-container">
//           {imgList.map((each, index) => {
//             return (
//               <div className="admin-img-container-div"  key={index}>
//                 <img
//                   src={`http://localhost:3000/uploads/${each}`}
                 
//                   className="admin-img-container-img"
//                 />
//                 <p>{each.slice(0, -4)}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admin;

import { useEffect, useState } from "react";
import Header from "../Header";
import "./admin.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [file, setFile] = useState(null);
  const [serialNumber, setSerialNumber] = useState("");
  const [imgList, setImgList] = useState([]);

  const navigate = useNavigate();
  const jwt_token = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwt_token === undefined) {
      navigate("/admin/login");
    }
  }, [jwt_token]);

  useEffect(() => {
    getImages(); // Fetch images when the component mounts
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const getImages = async () => {
    const url = "http://localhost:3000/file/images";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setImgList(data); // Update image list state
  };

  // Upload the file to the server
  const uploadFile = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!file || !serialNumber) {
      alert("Please provide both an ID and a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serialNumber", serialNumber);

    try {
      const response = await fetch("http://localhost:3000/file/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert("File uploaded successfully");
        setFile(null);
        setSerialNumber(""); // Clear serial number input
        getImages(); // Refresh image list after upload
        console.log(result);
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <>
      <Header />
      <div className="admin-bg">
        <form onSubmit={uploadFile} className="admin-input-container">
          <div>
            <label htmlFor="imag-input">IMAGE</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="admin-input"
              placeholder="Image Url"
              id="imag-input"
            />
          </div>
          <div>
            <label htmlFor="serial-number-input">PRODUCT SERIAL NO</label>
            <input
              type="text"
              placeholder="PRODUCT SERIAL NO"
              className="admin-input"
              id="serial-number-input"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
          </div>

          <button type="submit" className="admin-post-btn">
            ADD
          </button>
        </form>

        {/* Display uploaded images */}
        <div className="admin-img-container">
          {imgList.map((each, index) => (
            <div className="admin-img-container-div" key={index}>
              {/* <img
                src={`http://localhost:3000/uploads/${each.file_name}`}
                className="admin-img-container-img"
                alt={each}
              /> */}
              <p>{each.serial_number}</p>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
