import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex mt-40 gap-40 ">
      <div className="w-1/2">
        <p className=" text-7xl font-bold">
          Connect, share and grow with fellow techies.
        </p>
        <p className="text-neutral-500 my-10 text-lg">
          TechFiky gives you the opportunity to collaborate and broaden your skillset,
          while connecting with like-minded tech enthusiasts.
        </p>
        <div className="flex gap-7">
          <Link href="/signup">
            <button className="bg-[#16b776] hover:bg-[#16b776] text-white  py-2 px-4 rounded-[8px]">
              Join Now
            </button>
          </Link>

          <button>
            <div className="flex gap-2 text-center border border-[#16b776] py-2 px-4 rounded-[8px]">
              <img src="./images/video.png" alt="Watch Video" />

              <p className="text-[#16b776]">Watch Video</p>
            </div>
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <img src="./images/hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
