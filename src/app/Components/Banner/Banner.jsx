const Banner = () => {
  return (
    <div className=" mt-10 border rounded-2xl md:bg-orange-500 lg:bg-orange-500 bg-none flex flex-col md:flex-row lg:flex-row justify-center items-center">
      <div>
        <h1 className="md:text-white lg:text-white text-black md:text-4xl lg:text-4xl text-2xl text-center">Deliver Food To Your Door Step</h1>
        <p className="md:text-gray-300 lg:text-gray-300 text-black text-center p-2 text-sm md:text-xl lg:text-xl">Authentic Food. Quick Service and Fast Delivery</p>
      </div>
      <div className="bg-orange-500 lg:bg-none md:bg-none rounded-3xl mx-2">
        <img
          src="https://i.ibb.co/0mNV2V7/Image1.png"
          alt="Image1"
          border="0"
        />
      </div>
    </div>
  );
};

export default Banner;
