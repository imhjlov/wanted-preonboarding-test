import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileBtntoggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        mobileBtntoggle={mobileBtntoggle}
      ></Navbar>
    </div>
  );
};

export default Home;
