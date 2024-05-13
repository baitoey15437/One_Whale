import { useState } from "react";
import { FaCheckCircle,FaExclamationCircle,FaTimesCircle   } from 'react-icons/fa';
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { useHistory } from 'react-router-dom';

const ModalData = ({show,onHide,status,message,action}) => {

  // const history = useHistory();
  // console.log(typeof action);

    const modalClose = () => {
        onHide();
      };
      
    const handleClick = () => {
        
        history.push({action});
        // window.location.href = {action};
    }

    return (
        <Modal
        show={show}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
        size="md"
        className="ltn__modal-area"
      >
        <Modal.Header>
          {/* <Button
            onClick={handleClose}
            className="close"
            variant="secondary"

          >
            <span aria-hidden="true">&times;</span>
            <Modal.Title>Modal Title</Modal.Title>
          </Button> */}
        </Modal.Header>

        <Modal.Body>
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                <div className="col-12">
                  
                    {status == 0 ? 
                        <div className="modal-product-info text-center">
                            <div>
                            <FaCheckCircle style={{ color: 'green', fontSize: '62px' ,marginBottom: "25px"}} />
                            </div>
                            <h2>Success</h2>
                            <p className="added-cart">{message}</p>
                            <div className="btn-wrapper mt-0 btn-full-center">
                              <Link href={`${action}`} className="theme-btn-1 btn btn-full-width-3">OK</Link>
                            </div>
                        </div>
                     : status == 1? 
                     <div className="modal-product-info text-center">
                        <div>
                        <FaTimesCircle style={{ color: 'red', fontSize: '62px' ,marginBottom: "25px" }} />
                        </div>
                        <h2>Error</h2>
                        <p className="added-cart">{message}</p>
                        <div className="btn-wrapper mt-0 btn-full-center">
                            <button className="theme-btn-1 btn btn-full-width-3" onClick={modalClose} >OK</button>
                        </div>
                    </div>
                    :
                    <div className="modal-product-info text-center">
                        <div>
                        <FaExclamationCircle  style={{ color: 'var(--bs-yellow)', fontSize: '62px' ,marginBottom: "25px" }} />
                        </div>
                        <h2>warning</h2>
                        <p className="added-cart">{message}</p>
                        <div className="btn-wrapper mt-0 btn-full-center">
                            <button className="theme-btn-1 btn btn-full-width-3" onClick={modalClose} >OK</button>
                        </div>
                    </div>
                    }
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
  };
  
  export default ModalData;

