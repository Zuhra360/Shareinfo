
import { Sidebardata } from "./SidebarLinks";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path)=>{
    navigate(path);
  }
  return (
    <div className='min-h-screen fixed overflow-y-auto w-[90px] bg-[#141518] border-r-[0.5px] '>
        <div className='w-[24px] h-[508px] absolute top-[110px] left-[33px] py-[20px] flex flex-col gap-[50px]'>
            {Sidebardata.map((data,index) =>
             <button  onClick={()=>handleNavigation(data.link)} key={index}>{data.icon}</button>
            )}
        </div>

    </div>
  )
}
