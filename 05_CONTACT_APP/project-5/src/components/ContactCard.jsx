import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../Hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {}
  };

  return (
    <>
      <div
        key={contact.id}
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
          <RiEditCircleLine
            onClick={onOpen}
            className="text-black cursor-pointer"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-red-500 hover:text-red-600 cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </>
  );
};

export default ContactCard;
