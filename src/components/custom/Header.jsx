import React from "react";
import Logo from "/logo.svg";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <img src={Logo} alt="" />
        <div>
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Header;
