import { HomeImgElement } from "./showImage.style";
import { CenteredContainer } from "../../style";

const ShowImage = (props) => {
  const filePath = props.filePath;
  return (
    <CenteredContainer>
      <HomeImgElement src={`http://localhost:3000${filePath}`} />
    </CenteredContainer>
  );
};

export default ShowImage;
