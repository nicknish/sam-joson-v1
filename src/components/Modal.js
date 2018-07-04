import React from 'react';
import ReactModal from 'react-modal';

export default props => (
  <ReactModal
    className="modal-body"
    overlayClassName="modal-bg"
    closeTimeoutMS={200}
    {...props}
  >
    {props.children}
  </ReactModal>
);
