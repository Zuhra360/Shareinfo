import { Box } from '@mantine/core'
import { TopBar } from '../TopBar';
import { AiOutlineHourglass } from "react-icons/ai";
import seeall from "../../../../../../assets/images/PracticeHome/seeall.png";
import titleimg from "../../../../../../assets/images/PracticeHome/title.png";
import { IoIosArrowDown } from "react-icons/io";
import { ButtonData } from './RoadmapData';
import { AboutDesign } from './AboutDesign';
import { DesignReview } from './DesignReview';
import { PrototypeTesting } from './PrototypeTesting';
import { Feedback } from './Feedback';

export const SubmissionRoadmap = ({changePage}) => {
  return (
    <div className='w-[1430px] h-auto absolute  top-[60px] left-[90px] flex flex-col gap-[10px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage}/>
        <Box className='w-full  h-[86px] p-[20px] flex flex-row gap-[10px]'>
            <div className="w-[971px]  h-[46px] rounded-[10px] flex flex-row gap-[20px]">
                <div className="w-[820px] flex items-center  h-full rounded-[20px]  flex flex-row gap-[20px]">
                    <button className='w-[310px] h-full py-[10px] px-[20px] rounded-[10px] border border-gray-800 flex items-center flex-row gap-[10px]'>
                       <div className="w-[240px] flex items-center flex-row py-[3px] gap-[5px] ">
                          <img src={titleimg} className='h-[20px] w-[20px]'/>
                          <label className='w-[211px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E1E0D7]'>Roadmap to be a UIUX Designer</label>
                       </div>
                       <IoIosArrowDown className="w-[20px] h-[20px] text-[#E1E0D7]"/>
                    </button> 
                    <div className='w-[580px] h-[30px] flex flex-row gap-[10px]'>   
                    {ButtonData.map((data,index) =>
                       <button key={index} className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <div className='w-[20px] h-[20px]'>{data.img}</div>
                       <label className='w-auto   max-w-max inline-block h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.title}</label>
                       </button>
                    )}         
                    </div>
                </div>
               

                <button className='w-[91px] h-full p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                        <img src={seeall} className='h-[20px] w-[20px]'/>
                        <label className='w-[41px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>See All</label>
                </button>
            </div>
        </Box>

        <div className='w-[1390px]  h-auto p-[20px] border border-gray-500  rounded-[20px] flex flex-col gap-[10px]'>
         <div className="w-[1270px] h-[19px] flex items-start ">
              <h1 className='w-auto h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E6C100]'>Submission RoadMap</h1>
          </div>

          <div className='w-full h-auto  p-[15px] border border-gray-500  rounded-[10px] flex flex-col gap-[20px]'>         
                <AboutDesign/>
                <DesignReview/>
                <PrototypeTesting/>
                <Feedback/>
          </div>
          
          
          <div className='w-full h-[40px] flex flex-row gap-[20px] justify-end '>
            <button onClick={() => changePage('ManageTaskwiseView')} className='w-[120px] h-[40px] px-[20px] py-[10px] bg-[#E6C100] rounded-[10px] flex items-center justify-center '>
            <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-black'>Cancel</label>
            </button>
            <button className='w-[160px] h-[40px] px-[20px] py-[10px] bg-[#E6C100] rounded-[10px] flex items-center flex-row gap-[5px]'>
            <AiOutlineHourglass className='w-[20px] h-[20px] '/>
            <label className='w-[120px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-black'>Review & Publish</label>
            </button>
          </div>
    </div>



    </div>
  )
}
