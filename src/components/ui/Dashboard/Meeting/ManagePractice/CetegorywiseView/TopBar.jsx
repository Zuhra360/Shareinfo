import { useState } from "react";
import challenge from "../../../../../../assets/images/Navbar/challenge.png";
import arrow2 from "../../../../../../assets/images/Navbar/arrow2.png";
import datacheck from "../../../../../../assets/images/Navbar/data_check.png";
import actionkey from "../../../../../../assets/images/Navbar/actionkey.png";
import notification from "../../../../../../assets/images/Navbar/notification.png";
import calendar1 from "../../../../../../assets/images/Navbar/calendar1.png";
import calendar2 from "../../../../../../assets/images/Navbar/calendar2.png";
import calendar3 from "../../../../../../assets/images/Navbar/calendar3.png";
import createnew from "../../../../../../assets/images/Topbar/createnew.png";
import { Box } from "@mantine/core";


export const TopBar = ( {changePage} ) => {
    const [activeButton, setActiveButton] = useState(null);
  return (
    <div className='w-[1430px] h-auto  bg-[#141518]'>
        <Box className='w-full h-[50px] border-b-[0.5px] py-[10px] flex items-center justify-between flex-row gap-[10px]'>
            <div className='w-[452px] h-[30px] py-[5px] px-[20px] gap-[9px] flex flex-row items-center justify-center'>
                <div className='w-[93px] h-[20px] flex items-center flex-row gap-[10px] '>
                    <img src={challenge} className='w-[20px] h-[20px] '/>
                    <label className='w-[63px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Challenges</label>
                </div>
                <img src={arrow2} className='w-[20px] h-[20px] '/>
                <div className='w-[115px] h-[20px] flex items-center  flex-row gap-[10px] '>
                    <img src={datacheck} className='w-[20px] h-[20px] '/>
                    <label className='w-[79px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Practice Mode</label>
                </div>
                <img src={arrow2} className='w-[20px] h-[20px] '/>
                <div className='w-[125px] h-[20px] flex items-center flex-row gap-[5px] '>
                    <img src={createnew} className='w-[20px] h-[20px] '/>
                    <label className='w-[100px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Add New Practice</label>
                </div>
            </div>

            <div className='w-[100px] h-[30px] py-[5px] px-[20px] flex flex-row gap-[20px]'>
                <button><img src={actionkey}/></button>
                <button><img src={notification}/></button>
            </div>
        </Box>

        <Box className='w-full h-[60px] border-b-[1px] py-[15px] px-[20px] flex items-center  flex-row gap-[10px]'>
            <button onClick={() =>{
              changePage('PracticeHome')
              setActiveButton(1)}} className={`w-[172px] h-[30px] py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] flex items-center flex-row gap-[5px] bg-[#23262B] ${
          activeButton === 1 ? 'bg-[#23262B] opacity-100' : 'bg-[#23262B] opacity-50'}`}>
                <img src={calendar1} className='w-[20px] h-[20px] '/>
                <label className='w-[127px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Manage Practice Tasks</label>
            </button>
            <button  onClick={() =>{ changePage('Submissions')
              setActiveButton(2)
            }} className={`w-[115px] h-[30px] py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] flex items-center flex-row gap-[5px] bg-[#23262B] ${
          activeButton === 2 ? 'bg-[#23262B] opacity-100' : 'bg-[#23262B] opacity-50'
        }`}>
                <img src={calendar2} className='w-[20px] h-[20px] '/>
                <label className='w-[70px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Submissions</label>
            </button>
            <button onClick={() => {changePage('Practicewise')
               setActiveButton(3)
            }}  className={`w-[116px] h-[30px] py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] flex items-center flex-row gap-[5px] bg-[#23262B] ${
          activeButton === 3 ? 'bg-[#23262B] opacity-100' : 'bg-[#23262B] opacity-50'
        }`}>
                <img src={calendar3} className='w-[20px] h-[20px] '/>
                <label className='w-[71px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Leaderboard</label>
            </button>
        </Box>
        

    </div>
  )
}
