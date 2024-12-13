import { useEffect, useState } from "react";
import { getImages, deleteFile } from "../../Services/api";
import './hide.css'
import {
  SerialDeatailCartContainer,
  PageContainer,
  SerialDeatailCart,
} from "../../Style/ImageList.style";
import { toast } from "react-toastify";
import { ButtonElement, CenteredContainer } from "../../Style/style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const GetAllImages = (props) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { triggerFetchData } = props;

  const fetchImages = async () => {
    const data = await getImages(currentPage, itemsPerPage);
    data.images ? setImages(data.images) : toast.error(data);
  };

  useEffect(() => {
    fetchImages();
  }, [triggerFetchData, currentPage]);

  const handleConfirm = (serialNumber) => {
    confirmAlert({
      customUI: ({ onClose }) => (
          <div
            style={{
              background: '#282c34',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              textAlign: 'center',
              height: 'auto'
            }}
          >
            <h1 style={{ fontSize: '24px' }}>Are you sure?</h1>
            <p style={{ margin: '20px 0' }}>You want to delete this file?</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                style={{
                  background: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={() => {
                  handleDelete(serialNumber);
                  onClose();
                }}
              >
                Yes
              </button>
              <button
                style={{
                  background: 'red',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={onClose}
              >
                No
              </button>
            </div>
          </div>
      ),
      overlayClassName : 'overlay'
    });
  
  };



  const handleDelete = async (serialNumber) => {
    const data = await deleteFile(serialNumber);
    data.success
      ? (toast.success(data.message), fetchImages())
      : toast.error(data);
  };

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
        {images.map((each, index) => (
          <SerialDeatailCart key={each.serial_number}>
            <p style={{ margin: "auto 0" }}>{each.serial_number}</p>

            <ButtonElement
              backgruoundcolor="#DD0023"
              onClick={() => {
                handleConfirm(each.serial_number);
              }}
            >
              Delete
            </ButtonElement>
          </SerialDeatailCart>
        ))}
      </SerialDeatailCartContainer>
      <CenteredContainer>
        <ButtonElement id="left" onClick={prevPage} disabled={isPrevDisabled}>
          <FaArrowLeft />
        </ButtonElement>
        <PageContainer>
          <h1 style={{ color: "black" }}>{currentPage}</h1>
        </PageContainer>
        <ButtonElement id="right" onClick={nextPage} disabled={isNextDisabled}>
          <FaArrowRight />
        </ButtonElement>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default GetAllImages;
