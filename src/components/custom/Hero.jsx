import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";
function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[60px] mt-16 text-center">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:{" "}
        </span>
        <br />
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button className="text-md">Get Started, It's free</Button>
      </Link>
    </div>
  );
}

export default Hero;
