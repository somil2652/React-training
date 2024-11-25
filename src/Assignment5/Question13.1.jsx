import { useState } from "react";
import Modal from "./Question13.2";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h4>React customizable modal</h4>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h2>Custom Modal</h2>
      </Modal>
    </>
  );
};
export default CustomModal;
