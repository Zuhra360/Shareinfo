import { TbSmartHome } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import logo3 from "../../../assets/images/Sidebar/logo3.png";
import logo4 from "../../../assets/images/Sidebar/logo4.png";

export const Sidebardata = [
    {
      link: "home",
      icon: <TbSmartHome className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>,
    },
    {
      link: "usersharing",
      name: "usersharing",
      icon: <FaRegUserCircle className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>
    },
    {
      link: "mentoring",
      name: "mentoring",
      icon: <img src={logo3} className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>,
    },
    {
      link: "meeting",
      name: "meeting",
      icon: <img src={logo4} className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>,
    },
    {
      link: "Settings",
      name: "Settings",
      icon: <IoMdSettings className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>,
    },
    
    {
      link: "logout",
      name: "logout",
      icon: <FaDoorOpen className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] " />,
    },
    {
      link: "employee",
      name: "employee",
      icon: <GoPeople className="w-[24px] h-[24px] hover:text-blue-700  text-[#8B8B8B] "/>,
    },
  ];