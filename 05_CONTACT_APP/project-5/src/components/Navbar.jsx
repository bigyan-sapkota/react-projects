import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-center items-center my-4 h-[60px] text-xl font-medium bg-white rounded-lg">
      <img src="/firebase.svg" alt="firebase" />
      <h1 className="bg-white flex">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
