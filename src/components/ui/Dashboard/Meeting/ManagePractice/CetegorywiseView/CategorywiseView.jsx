import { Box } from '@mantine/core'
import task from "../../../../../../assets/images/PracticeHome/task.png";
import RecentSubmissionimg from "../../../../../../assets/images/PracticeHome/RecentSubmissionimg.png";
import seeall from "../../../../../../assets/images/PracticeHome/seeall.png";
import filters from "../../../../../../assets/images/PracticeHome/filter.png";
import perksimg from "../../../../../../assets/images/PracticeHome/perks.png";
import register from "../../../../../../assets/images/PracticeHome/register.png";
import titleimg from "../../../../../../assets/images/PracticeHome/title.png";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import processimg from "../../../../../../assets/images/PracticeHome/process.png";
import sort from "../../../../../../assets/images/PracticeHome/sort.png";
import { CompleteData } from './CategoryData';
import { useState } from 'react';
import { TopBar } from './TopBar';

export const CategorywiseView = ({changePage}) => {
  const [filter, setFilter] = useState("coding");
  const categories = [ ...new Set(CompleteData.map((item) => item.task))];
  const filteredData = CompleteData.filter((item) => item.task === filter);
  return (
    <div className='w-[1430px] h-auto absolute top-[60px] left-[90px] flex flex-col gap-[20px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage}/>
        <Box className='w-full h-[80px] p-[20px] rounded-[15px] border-[3px] border-gray-800 flex items-center justify-center gap-[20px]'>
            <div className='w-[1390px] h-[40px]  flex items-center justify-between'>
                <div className='w-[340px] h-full flex items-center flex-row gap-[20px]'>
                  <button className='w-[98px] h-full p-[10px] rounded-[10px] border border-[#E6C10040] flex items-center flex-row gap-[10px]'>
                    <img  src={RecentSubmissionimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[131px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#34A853]'>Ongoing </label>
                  </button>
                  <button className='w-[111px] h-full p-[10px] rounded-[10px] border border-[#E6C10040]  flex items-center flex-row gap-[10px]'>
                    <img  src={task} className='h-[20px] w-[20px]'/>
                    <label className='w-[112px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Completed </label>
                  </button>
                  <button className='w-[91px] h-full p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                    <img src={seeall} className='h-[20px] w-[20px]'/>
                    <label className='w-[41px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>See All</label>
                  </button>
                </div>

                <div className='w-auto h-full flex items-center flex-row gap-[20px]'>
                  <button onClick={() => changePage('PracticeHome')} className='w-[80px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center justify-center flex-row gap-[10px]'>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Go Back</label>
                  </button>
                  <button className='w-[80px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <label className='w-[30px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Filter</label>
                    <img src={filters} className='h-[20px] w-[20px]'/>
                  </button>
                  <button className='w-[75px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <label className='w-[25px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Sort</label>
                    <img src={sort} className='h-[20px] w-[20px]'/>
                  </button>
                </div>
            </div>
        </Box>
        
        <Box className='w-[930px] h-[30px]  flex items-center flex-row gap-[20px]'>         
            {categories.map((task) =>
            <button onClick={() => setFilter(task)} className={`w-auto  max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner  rounded-[7px] items-center gap-[10px] ${
              filter === task ? "shadow-[#FFFFFF90]" : "bg-inherit shadow-[#FFFFFF20] "}`}  key={task} >
                <img src={processimg} className='h-[20px] w-[20px]'/>
                <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{task}</label>
            </button>
            )}     
        </Box>

        <div className='w-full h-[630px] flex justify-between'>
          <div className='w-[965px] h-full flex flex-col gap-[20px]'>
          {filteredData.map((item) => (
            <div  key={item.Num} className='w-full h-[30px] flex flex-row gap-[20px]'>
                <h1  className="w-[15px] h-[30px] flex items-center font-[Nunito] font-bold text-[12px] leading-[16px] text-[#52514E]">
                    <label className="h-[16px]">{item.Num}</label>
                </h1>
                <div className="w-[120px] h-full flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={calendar} className='h-[20px] w-[20px]'/>
                    <label className='w-[73px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.Date}</label>
                </div>
                <div className="w-auto inline-block  max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={processimg} className='h-[20px] w-[20px]'/>
                    <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.task}</label>
                </div>
                <div  className="w-[125px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={processimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[75px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.process}</label>
                </div>
                <div  className="w-[99px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={perksimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[49px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{item.perks}</label>
                </div>
                <div className=" w-[300px] h-full flex flex-row items-center gap-[5px] ">
                    <img src={titleimg} className='h-[20px] w-[20px]'/>
                    <label className='w-full  h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E1E0D7]'>{item.title}</label>
                </div>
            </div>
            ))}            
          </div>

          <div className="w-[260px] h-full flex flex-col gap-[20px]">
          {filteredData.map((item) => (
              <div  key={item.Num} className='w-full  h-[30px] p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                <label className='w-[271px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>{item.update}</label>
                <button className="w-[30px] h-[30px]"><img src={register} className='h-[20px] w-[20px]'/></button>
              </div>
              ))}  
          </div>

        </div>
        


    </div>
  )
}
