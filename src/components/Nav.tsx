import NormalNav from "./NormalNav";
import MobileNav from "./MobileNav";
import React from "react";

const Nav: React.FC = () => {
  return (
    <>
      <NormalNav />
      <MobileNav />
    </>
  );
};

export default Nav;
