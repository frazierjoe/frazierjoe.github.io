import * as React from "react";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import Button from 'react-bootstrap/Button';

interface Props {
  show: boolean;
  toggleShow: Function;
}

const EmailModal = ({ show, toggleShow }: Props) => {
  return (
    <Modal size="sm" show={show} onHide={() => toggleShow()} centered>
      <ModalHeader closeButton>
        <ModalTitle className="text-primary">Email me at</ModalTitle>
      </ModalHeader>
      <ModalBody className="text-center">
        <a href="mailto:frazierj@wustl.edu">frazierj@wustl.edu</a>
      </ModalBody>
      <ModalFooter className='d-flex justify-content-center'>
          <Button variant="dark" onClick={() => toggleShow()}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EmailModal;
