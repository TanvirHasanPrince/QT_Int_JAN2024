/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const Popular = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    itemName: "",
    itemImageUrl: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      Items: [
        ...prevData.Items,
        {
          Id: Date.now(),
          Name: formData.Name,
          Price: formData.Price,
          ImageUrl: formData.itemImageUrl,
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
                      <img
                        src={item.ImageUrl}
                        alt=""
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
          <input
            type="text"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          <input
            type="text"
            name="ImageUrl"
            value={formData.ImageUrl}
            onChange={handleInputChange}
            placeholder="ImageUrl"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          <input
            type="text"
            name="IsPopular"
            value={formData.IsPopular}
            onChange={handleInputChange}
            placeholder="Only write ture or false"
            className="border border-gray-300 p-2 rounded mb-2"
          />
          <input
            type="text"
            name="IsRecommended"
            value={formData.IsRecommended}
            onChange={handleInputChange}
            placeholder="Only write ture or false"
            className="border border-gray-300 p-2 rounded mb-2"
          />
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
