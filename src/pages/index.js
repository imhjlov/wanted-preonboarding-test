import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileSidebar from "../components/Sidebar/MobileSidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle}></Navbar>
      <MobileSidebar isOpen={isOpen} toggle={toggle}></MobileSidebar>
    </div>
  );
};

export default Home;
