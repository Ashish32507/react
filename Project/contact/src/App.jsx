import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Contact from "./Components/Contact";
import Modal from "./Components/Modal";

function App() {
  const [contact, setContact] = useState([]);

  const [isopen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactsRef = collection(db, "Contact");
        const contactsSnapShot = await getDocs(contactsRef);

        const contactList = contactsSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContact(contactList);
      } catch (err) {
        console.log(err);
      }
    };

    getContact();
  }, []);
  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navbar />
        <div className="flex items-center gap-2">
          <div className="flex relative items-center flex-grow">
            <FaSearch className="flex absolute text-3xl ml-1 text-white" />
            <input
              type="text"
              className="pl-9 flex-grow border rounded-md text-white border-white bg-transparent h-10 outline-none"
            />
          </div>
          <CiCirclePlus
            onClick={onOpen}
            className="text-4xl  cursor-pointer text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contact.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <Modal isOpen={isopen} onClose={onClose}>
        HI
      </Modal>
    </>
  );
}

export default App;
