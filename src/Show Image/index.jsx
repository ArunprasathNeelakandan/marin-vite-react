import React, { useState } from "react";
import Modal from "react-modal";
import { ButtonElement,CenteredContainer } from "../../style";

// Ensure accessibility by setting the root app element
Modal.setAppElement("#root");

const ShowImage = (props) => {
  const { filePath,assignFilePath } = props; 
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () =>{
     setIsOpen(false)
     assignFilePath('')
    };

  console.log(isOpen)

  return (
    <div style={{height: 'fit-content'}}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Popup"
        style={{
          content: {
            width: "max-content",
            height: "auto",
            margin: "auto",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.322)",
            overflow: 'hidden'
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <img
          src={`http://localhost:3000${filePath}`}
          alt="Popup"
          style={{ maxWidth: "90%", maxHeight: "100%" }}
        />
        <br />
        <CenteredContainer>
        <ButtonElement onClick={closeModal}>CLOSE</ButtonElement>
        </CenteredContainer>
        
      </Modal>
    </div>
  );
};

export default ShowImage;

