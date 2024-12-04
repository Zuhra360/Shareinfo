import { IoIosArrowDown } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { Box } from "@mantine/core";
import tasklogo from "../../../../../../assets/images/Leaderboard/tasklogo.png";
import { CgChevronDoubleUp } from 'react-icons/cg';
import processimg from "../../../../../../assets/images/Leaderboard/process.png";
import person from "../../../../../../assets/images/Leaderboard/person.png";
import enroll from "../../../../../../assets/images/Leaderboard/enroll.png";
import { TopBar } from '../TopBar'
import { useState } from "react";
import { WeeklyDatas } from "./WeeklyData";

export const WeeklyPage = ( {changePage} ) => {
    const [filter, setFilter] = useState("Weekly (Sep 01-08)");
    const categories = [ ...new Set(WeeklyDatas.map((item) => item.title))];
    const filteredData = WeeklyDatas.filter((item) => item.title === filter);
  return (
    <div className='w-[1430px] h-auto absolute  top-[60px] left-[90px] flex flex-col gap-[10px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage} />
        <Box className='w-full h-[80px] p-[20px] flex flex-row gap-[10px]'>
            <div className="w-[539px] h-[40px] rounded-[10px] flex flex-row gap-[20px]">
            <div className="relative w-auto h-full flex flex-row ">
                 
                 <select 
                   value={filter}
                   onChange={(e) => setFilter(e.target.value)} 
                   className="w-auto h-auto py-[10px] px-[30px] rounded-[10px] border border-gray-800 flex items-center gap-[20px] bg-[#141518] appearance-none text-[#E1E0D7] font-[Nunito] font-bold text-[14px] leading-[19px]">
                     
                        <option  className='w-auto  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>Weekly (Sep 01-08)</option>
                        <option className='w-auto  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>Weekly (Sep 09-15)</option>
                 </select>
                 <IoIosArrowDown className="absolute right-[10px] top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] text-[#34A853] pointer-events-none" />
               </div>
                    <button className='w-auto h-full py-[10px] px-[10px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
                        <label className='w-[88px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>Practice</label>
                        <IoIosArrowDown className="w-[20px] h-[20px] text-[#34A853]"/>
                    </button>
                    <button className='w-auto h-full py-[10px] px-[10px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
                        <label className='w-[88px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>Monthly</label>
                        <IoIosArrowDown className="w-[20px] h-[20px] text-[#E1E0D7]"/>
                    </button>
            </div>
        </Box>

        <div className='w-full h-auto flex justify-between'>
          <div className='w-[965px] h-full flex flex-col gap-[20px]'>
          {filteredData.map((item) => (
            <div  key={item.Num} className='w-full h-[30px] flex flex-row gap-[20px]'>
                <h1  className="w-[15px] h-[30px] flex items-center font-[Nunito] font-bold text-[12px] leading-[16px] text-[#52514E]">
                    <label className="h-[16px]">{item.Num}</label>
                </h1>
                
                <div className="w-[80px]  h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <CgChevronDoubleUp className='h-[20px] w-[20px] text-[#34A853]'/>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.score}</label>
                </div>
                <div  className="w-[150px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={person} className='h-[20px] w-[20px]'/>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.person}</label>
                </div>
                <div  className="w-[168px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={processimg} className='h-[20px] w-[20px]'/>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.status}</label>
                </div>
                <div className="w-[120px] h-full flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <MdChecklist className="h-[20px] w-[20px] text-[#34A853]" />
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.completed}</label>
                </div>
                <div  className="w-auto h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={enroll} className='h-[20px] w-[20px]'/>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.enrolled}</label>
                </div>
                
            </div>
            ))}            
          </div>

          <div className="w-[260px] h-full flex flex-col gap-[20px]">
          {filteredData.map((item) => (
              <div  key={item.Num} className='w-full  h-[30px] p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                <label className='w-[271px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>{item.update}</label>
                
              </div>
              ))}  
          </div>
        </div>
    </div>
  )
}