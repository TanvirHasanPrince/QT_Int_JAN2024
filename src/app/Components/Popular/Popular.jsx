
"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";
import Image from "next/image";

const Popular = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Price: "",
    ImageUrl: "",
    IsPopular: "",
    IsRecommended: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    Name: "",
    Price: "",
    ImageUrl: "",
    IsPopular: "",
    IsRecommended: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.Name) {
      newErrors.Name = "Name is required";
      valid = false;
    }

    if (!formData.Price) {
      newErrors.Price = "Price is required";
      valid = false;
    }
    if (!formData.ImageUrl) {
      newErrors.ImageUrl = "ImageUrl is required";
      valid = false;
    }
    if (formData.IsPopular !== "true" && formData.IsPopular !== "false") {
      newErrors.IsPopular = "Please enter either 'true' or 'false'";
      valid = false;
    }

    if (
      formData.IsRecommended !== "true" &&
      formData.IsRecommended !== "false"
    ) {
      newErrors.IsRecommended = "Please enter either 'true' or 'false'";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setData((prevData) => ({
      ...prevData,
      Items: [
        ...prevData.Items,
        {
          Id: Date.now(),
          Name: formData.Name,
          Price: formData.Price,
          ImageUrl: formData.ImageUrl,
          IsPopular: formData.IsPopular,
          IsRecommended: formData.IsRecommended,
        },
      ],
    }));

    setFormData({
      Name: "",
      Price: "",
      ImageUrl: "",
      IsPopular: "",
      IsRecommended: "",
    });

    closeModal();
  };

  const items = data?.Items;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="mt-20">
      <div className="flex  flex-col">
        <div className="flex justify-between">
          <p className="text-black pl-4">Popular</p>
          <div className="flex">
            <button onClick={openModal} className=" text-orange-500 ">
              Add More
            </button>
            <div className="flex">
              <LiaLessThanSolid
                size={20}
                onClick={slideLeft}
              ></LiaLessThanSolid>
              <LiaGreaterThanSolid
                size={20}
                onClick={slideRight}
              ></LiaGreaterThanSolid>
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex items-center">
            <div
              id="slider"
              className="flex overflow-hidden whitespace-nowrap scroll-smooth"
            >
              {items &&
                items
                  .filter((item) => item.IsPopular)
                  .map((item) => (
                    <div key={item.Id} className="flex-shrink-0 mx-2">
                      <Image
                        src={item.ImageUrl}
                        alt=""
                        width={220}
                        height={220}
                        key={item.Id}
                        className="w-[220px] h-[220px] p-2 hover:scale-105 ease-in-out duration-300"
                      />
                      <p className="text-center">{item.Name}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Item Modal"
        className="modal flex items-center justify-center flex-col"
      >
        <form onSubmit={handleFormSubmit} className="my-10 flex flex-col">
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          {formErrors.Name && <p className="text-red-500">{formErrors.Name}</p>}

          <input
            type="text"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          {formErrors.Price && (
            <p className="text-red-500">{formErrors.Price}</p>
          )}

          <input
            type="text"
            name="ImageUrl"
            value={formData.ImageUrl}
            onChange={handleInputChange}
            placeholder="ImageUrl"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          {formErrors.ImageUrl && (
            <p className="text-red-500">{formErrors.ImageUrl}</p>
          )}

          <input
            type="text"
            name="IsPopular"
            value={formData.IsPopular}
            onChange={handleInputChange}
            placeholder="Is Popular? Only write true or false"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          {formErrors.IsPopular && (
            <p className="text-red-500">{formErrors.IsPopular}</p>
          )}

          <input
            type="text"
            name="IsRecommended"
            value={formData.IsRecommended}
            onChange={handleInputChange}
            placeholder="Is Recommended? Only write true or false"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          {formErrors.IsRecommended && (
            <p className="text-red-500">{formErrors.IsRecommended}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Item
          </button>
        </form>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default Popular;
