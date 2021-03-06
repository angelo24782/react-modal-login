import React from "react";
import { Modal } from "./Modal";

export const ModalContainer = ({ show, close }) => {
  const showModal = show ? "active" : "";

  return (
    <div className={`modal-wrapper ${showModal}`}>
      <Modal close={close} />
    </div>
  );
};
