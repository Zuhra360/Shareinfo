import seeall from "../../../../../assets/images/PracticeHome/seeall.png";
import titleimg from "../../../../../assets/images/PracticeHome/title.png";
import { IoIosArrowDown } from "react-icons/io";
import { Box } from '@mantine/core'
import { TopBar } from './TopBar'
import { AllSubmissions } from "./SubmissionPage/AllSubmissions";


export const ManageTaskwiseView = ({changePage}) => {
  return (
    <div className='w-[1430px] h-auto absolute  top-[60px] left-[90px] flex flex-col gap-[10px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage}/>
        <Box className='w-full h-[86px] p-[20px] flex flex-row gap-[10px]'>
            <div className="w-[599px] h-[46px] rounded-[10px] flex flex-row gap-[20px]">
                <div className="w-[488px]  h-full rounded-[20px]  flex flex-row gap-[20px]">
                    <button className='w-[310px] h-full py-[10px] px-[20px] rounded-[10px] border border-gray-800 flex items-center flex-row gap-[10px]'>
                       <div className="w-[240px] flex items-center flex-row py-[3px] gap-[5px] ">
                          <img src={titleimg} className='h-[20px] w-[20px]'/>
                          <label className='w-[211px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E1E0D7]'>Roadmap to be a UIUX Designer</label>
                       </div>
                       <IoIosArrowDown className="w-[20px] h-[20px] text-[#E1E0D7]"/>
                    </button>
                    <button className='w-[158px] h-full py-[10px] px-[10px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
                        <IoIosArrowDown className="w-[20px] h-[20px] text-[#E1E0D7]"/>
                        <label className='w-[88px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E1E0D7]'>Top Submission</label>
                    </button>    
                </div>

                <button className='w-[91px] h-full p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                        <img src={seeall} className='h-[20px] w-[20px]'/>
                        <label className='w-[41px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>See All</label>
                </button>
            </div>
        </Box>

        <AllSubmissions changePage={changePage}/>
        
    </div>
  )
}
