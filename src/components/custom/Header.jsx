import React from "react";
import Logo from "/logo.svg";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <div className="p-5">
        <img src={Logo} alt="" />
        <div>
          <Button variant="destructive">Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Header;
