import React from "react";
import { Meteors } from "../../components/ui/meteors";
function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
        Contact Us Page
      </h1>
      <Meteors number={50} />
    </div>
  );
}

export default page;
