import { useEffect,useCallback,useState } from "react";
import ImageDetailes from "../ImageDetailes";
import { SerialDeatailCartContainer } from "./getAllImages.style";
import { jwtToken } from "../../commonFunction";
import { toast } from "react-toastify";


const GetAllImages = (props) =>{
    const [imgList, setImgList] = useState([]);

    
    const getImages = useCallback(async () => {
        try {
          const res = await fetch("http://localhost:3000/file/images", {
            method: "GET",
            headers: { Authorization: `Bearer ${jwtToken}` },
          });
          const data = await res.json();
          res.ok ? setImgList(data) : toast.error(data.message);
        } catch (error) {
          toast.error('error',"Error fetching images");
        }
      }, []);

      useEffect(()=>{
        getImages()
      })



      return(
        <SerialDeatailCartContainer>
          {imgList.map((each,index) => (
            <ImageDetailes each={each} key={index}/>
          ))}  
        </SerialDeatailCartContainer>
      )
}

export default GetAllImages