import React, { useState } from "react";
import Image from "next/image";
import Airbnb from "../../../public/qd3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangePicker } from "react-date-range";
import { Calendar } from "react-multi-date-picker";

export default function Navbar() {
  const [inputData, setInputData] = useState("");
  const [state, setState] = useState({
    selection1: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection1",
    },
  });

  return (
    <div className="sticky top-0 z-10">
      <div className="sticky bg-white z-10 top-0 py-7  flex items-center justify-evenly">
        <div>
          <Image src={Airbnb} width={150} height={29} />
        </div>

        <div className="flex items-center justify-between border-2 py-2 px-3 border-gray-500 w-80 rounded-full bg-transparent hover:shadow-xl gray">
          <input
            type="search"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Start Your Search"
            className=" mx-3 placeholder-slate-500 outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className=" text-white bg-red-400 px-2 py-2 rounded-full"
          />
        </div>

        <div className="flex justify-evenly items-center space-x-7">
          <p className=" text-gray-500 px-5 py-3 hover:bg-slate-200 rounded-full">
            {" "}
            Become a host{" "}
          </p>
          <FontAwesomeIcon
            icon={faGlobe}
            className="  text-gray-600  px-3 py-3 hover:bg-slate-200 rounded-full"
          />
          <div className="flex items-center space-x-3 border-2 border-solid px-2 py-1 cursor-pointer border-gray-300 rounded-full hover:shadow-lg gray">
            <p>&#9776;</p>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>

      {inputData != "" && (
        <center className="  ml-64">
          <DateRangePicker
            className="sm:w-full  w-28"
            color="red"
            onChange={(item) => setState({ ...state, ...item })}
            moveRangeOnFirstSelection={true}
            ranges={[state.selection1]}
            value={state}
            rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
            minDate={new Date()}
          />
          <div className=" my-4 ">
         <div className=" flex items-center space-x-64 ">
          <h1 className=" text-2xl font-thin">Number of Guests</h1>
          <div> <FontAwesomeIcon icon={faUserGroup} />
          <input type="Number" className=" text-red-500 w-9 " /> </div>
         </div>
         <hr className=" h-3 hr1 text-gray-600 absolute" />
         <div className=" b1 space-x-36">
          <button onClick={()=>setInputData('')} className=" text-gray-400">Cancel</button>
          <button className=" text-red-500">Search</button>
         </div>
         <hr className=" h-3 w-96 text-gray-600 absolute ml-9" />
         </div>
        </center>
      )}
    </div>
  );
}
