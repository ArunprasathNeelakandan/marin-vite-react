import { useEffect, useCallback, useState } from "react";
import ImageDetailes from "../ImageDetailes";
import { SerialDeatailCartContainer,PageContainer } from "./getAllImages.style";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from 'js-cookie'
import { ButtonElement,CenteredContainer } from "../../../style";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GetAllImages = (props) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalImages, setTotalImages] = useState(0);
  const itemsPerPage = 8;
  const jwtToken = Cookies.get("jwt_token");
 



  const fetchImages = async () => {
    console.log('1');
    try {
      console.log("JWT Token:", jwtToken); // Log token to ensure it's correct
      const response = await axios.get("http://localhost:3000/file/images", {
        params: { page: currentPage, limit: itemsPerPage },
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
  
      console.log('Response Status:', response.status); // Log response status
      console.log('Response Data:', response.data); // Log response data
  
      setImages(response.data.images);
      setTotalImages(response.data.totalImages);
      console.log('2');
    } catch (error) {
      console.log('Error occurred:', error); // Log complete error object
      console.error("Error fetching images:", error.response || error);
    }
  };

  useEffect(() => {
    fetchImages();
  },[currentPage,images]);


  const nextPage = () => {
    if (images.length === itemsPerPage) {
      setCurrentPage((prev) => prev + 1);
       
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isNextDisabled = images.length < itemsPerPage;
  const isPrevDisabled = currentPage === 1;

  return (
    <CenteredContainer>
     
      <SerialDeatailCartContainer>
      {images.map((each,index) => (
            <ImageDetailes each={each} key={index}/>
          ))}    
    </SerialDeatailCartContainer>
    <CenteredContainer>
        <ButtonElement onClick={prevPage} disabled={isPrevDisabled}>
          <FaArrowLeft/>
        </ButtonElement>
        <PageContainer>
        <h1 style={{color:'#fff'}}>{currentPage}</h1>
        </PageContainer>
        <ButtonElement onClick={nextPage} disabled={isNextDisabled}>
          <FaArrowRight/>
        </ButtonElement>
        </CenteredContainer>
    </CenteredContainer>
  );
};

export default GetAllImages;
