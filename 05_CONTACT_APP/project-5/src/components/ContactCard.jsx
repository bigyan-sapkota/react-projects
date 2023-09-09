import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCard = ({ contact }) => {
  return (
    <div
      className="flex justify-between items-center bg-yellow
    rounded-lg"
    >
      <div className="flex gap-1 p-1">
        <div className="flex justify-center items-center">
          <HiOutlineUserCircle className="text-orange text-5xl font-thin" />
        </div>
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-2xl">
        <RiEditCircleLine className="text-black" />
        <IoMdTrash className="text-red-500 hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactCard;
