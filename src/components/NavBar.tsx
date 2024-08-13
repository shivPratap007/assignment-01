import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


export default function NavBar() {
  return (
    <div className="flex justify-between items-center bg-white  py-3 px-5 font-sans ">
        {/* left */}
      <div className="hidden lg:block">
        Home &gt; <span className="font-bold text-blue-800">Dashboardv2</span>
      </div>

      {/* middle */}

      <div className="w-full max-w-md mx-auto relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          className="w-full px-2   pl-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg text-gray-700"
          placeholder="Search anything"
        />
      </div>

        
      

      {/* right */}
      <div className="flex justify-between gap-14 items-center ">
        <IoIosArrowDown className="cursor-pointer hidden lg:block" />

        <CiBellOn className="text-2xl cursor-pointer hidden lg:block" />
        <a href="https://github.com/shivPratap007/assignment-01" target="_blank"><FaGithub className="text-2xl cursor-pointer"/></a>

        
        <div className="flex justify-center gap-2 items-center border-2 px-4 cursor-pointer py-1 ml-5 md:ml-0 border-blue-800 rounded">
          <FaRegUserCircle className="text-blue-800" />
          Login
        </div>
      </div>
    </div>
  );
}
