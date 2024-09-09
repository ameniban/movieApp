function Navbar() {
  return (
    <nav className="bg-[#121212] py-2">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="flex space-x-16">
        <div className="flex flex-col text-yellow-500">
          <h1 className="text-[18px] leading-4">ALL ABOUT</h1>
          <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>
        </div>
        <button className="text-[18px] text-yellow-500 hover:underline">EXPLORE</button>
        </div>
        <div className="">
          <input className="w-[500px] h-9 bg-black text-[#2c2c2c] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl"
           type="text" 
           placeholder="search ..."
           />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
