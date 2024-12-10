import { useEffect,useCallback,useState } from "react";
import ImageDetailes from "../ImageDetailes";
import { SerialDeatailCartContainer } from "./getAllImages.style";
import { jwtToken } from "../../commonFunction";


const GetAllImages = (props) =>{
    const [imgList, setImgList] = useState([]);

    const {setAlertMsg} = props
    
    const getImages = useCallback(async () => {
        try {
          const res = await fetch("http://localhost:3000/file/images", {
            method: "GET",
            headers: { Authorization: `Bearer ${jwtToken}` },
          });
          const data = await res.json();
          res.ok ? setImgList(data) : setAlertMsg('error',data.message);
        } catch (error) {
          setAlertMsg('error',"Error fetching images");
        }
      }, []);

      useEffect(()=>{
        getImages()
      })



      return(
        <SerialDeatailCartContainer>
          {imgList.map((each,index) => (
            <ImageDetailes setAlertMsg={setAlertMsg} each={each} key={index}/>
          ))}  
        </SerialDeatailCartContainer>
      )
}

export default GetAllImages