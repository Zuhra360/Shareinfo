
import { Completed } from './Completed';
import { Ongoing } from './Ongoing';
import sort from "../../../../../../assets/images/PracticeHome/sort.png";
import seeall from "../../../../../../assets/images/PracticeHome/seeall.png";
import { IoIosArrowDown } from "react-icons/io";
import { Box } from '@mantine/core';
import { Buttonlabels } from '../SubmissionData';
import { TopBar } from '../TopBar';

export const Submissions = ( {changePage}) => {
  return (
    <div className='w-[1430px] h-auto absolute  top-[60px] left-[90px] flex flex-col gap-[10px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage}/>
        <Box className='w-full h-[80px] p-[20px] flex flex-row gap-[10px]'>
            <div className="w-[1037px] h-[40px] rounded-[20px] flex flex-row gap-[10px]">
                <div className="w-[840px]  h-full rounded-[20px]  flex flex-row gap-[20px]">
                    <button className='w-[109px] h-full py-[10px] px-[20px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
                        <IoIosArrowDown className="w-[20px] h-[20px] text-[#34A853]"/>
                        <label className='w-[39px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#34A853]'>Recent</label>
                    </button>
                    <button className='w-[95px] h-full py-[10px] px-[20px] rounded-[10px] border border-gray-800 flex items-center flex-row gap-[10px]'>
                        <label className='w-[25px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Sort</label>
                        <img src={sort} className='h-[20px] w-[20px]'/>
                    </button>
                    {Buttonlabels.map((data,index) =>
                    <button key={index} className='w-auto max-w-max  h-full py-[10px] px-[10px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
                        <IoIosArrowDown className="w-[20px] h-[20px] text-[#E1E0D7]"/>
                        <label className='w-auto inline-block max-w-max h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>{data.label}</label>
                    </button>
                    )}
                </div>

                <button className='w-[91px] h-full p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                        <img src={seeall} className='h-[20px] w-[20px]'/>
                        <label className='w-[41px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>See All</label>
                </button>
            </div>
        </Box>

        <Completed changePage={changePage} />
        <Ongoing/>
        
    </div>
  )
}
