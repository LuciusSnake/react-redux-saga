import React from 'react';
import PropTypes from "prop-types";
import { Modal } from 'react-bootstrap';


function CustomModal({ isShow, onClose, footer, title, children }) {
  return (
    <Modal show={isShow} onHide={onClose}>
      <Modal.Header closeButton>
        {!!title && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      {!!footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
}

CustomModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  footer: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default React.memo(CustomModal)
