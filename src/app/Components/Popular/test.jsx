import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const Popular = () => {
  // ... (existing code)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="mt-20">
      {/* ... (existing code) */}
      <div>
        {/* Button to open modal */}
        <button onClick={openModal}>Add More</button>
      </div>

      {/* Modal for adding items */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Item Modal"
      >
        <form onSubmit={handleFormSubmit} className="mt-4">
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            placeholder="Item Name"
            className="mr-2"
          />
          <input
            type="text"
            name="itemImageUrl"
            value={formData.itemImageUrl}
            onChange={handleInputChange}
            placeholder="Item Image URL"
            className="mr-2"
          />
          <button type="submit">Add Item</button>
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Popular;
