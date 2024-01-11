/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const Popular = () => {
  const [data, setData] = useState(null);

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

  const items = data?.Items;
  console.log(items);

  return (
    <div className="mt-20">
      <div className="flex  flex-col">
        <div className="flex justify-between">
          <p className="text-black pl-4">Popular</p>
          <div className="flex">
            <p className="text-orange-500">Add More</p>
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
    </div>
  );
};

export default Popular;
