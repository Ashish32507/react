import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function Modal({ onClose, isOpen, isChildren }) {
  return (
    <>
      {isOpen && (
        <>
          <div className="relative min-h-[200px] max-w-[80%] bg-white p-4 z-50 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose className="text-2xl " onClick={onClose} />
            </div>
          </div>
          <div
            onClick={onClose}
            className="absolute z-40 h-screen w-screen backdrop-blur top-0"
          ></div>
        </>
      )}
    </>
  );
}

export default Modal;
