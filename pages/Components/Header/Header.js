import React from "react";

import Bgimg from "../../../public/0fm.webp";

export default function Header() {
  return (
    <div
      className=" h-screen w-full flex items-center justify-center "
      style={{ background: `url(${Bgimg.src})` }}
    >
      <div className=" justify-center items-center">
        <h1 className="text-black text-lg font-bold">
          {" "}
          Not Sure where to go? Perfect{" "}
        </h1>

        <pre className=" cursor-pointer my-9 px-7 py-3 text-purple-500 font-bold bg-white rounded-full hover:shadow-lg gray">
          {" "}
          I'm flexible{" "}
        </pre>
      </div>
    </div>
  );
}
{
  /* <Image className=' h-full w-full' src={Bgimg} /> */
}
