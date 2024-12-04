import {  CompletedData } from '../SubmissionData'
import perksimg from "../../../../../../assets/images/PracticeHome/perks.png";
import register from "../../../../../../assets/images/PracticeHome/register.png";
import titleimg from "../../../../../../assets/images/PracticeHome/title.png";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import processimg from "../../../../../../assets/images/PracticeHome/process.png";
import enroll from "../../../../../../assets/images/Submissions/enroll.png";
import submit from "../../../../../../assets/images/Submissions/submit.png";
import { IoIosArrowDown } from "react-icons/io";


export const Ongoing = () => {
  return (
    <div className='w-full h-[380px] p-[20px] rounded-[15px] border border-gray-800 bg-[#141518] flex flex-col gap-[20px]'>
        <button className='w-[125px] h-[40px] py-[10px] px-[10px] border border-gray-800 rounded-[10px] flex items-center flex-row gap-[10px] '>
            <IoIosArrowDown className="w-[20px] h-[20px] text-[#34A853]"/>
            <label className='w-[55px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#34A853]'>On-Going</label>
        </button>
        <div className='w-full h-[280px]  flex justify-between'>
          <div className='w-[1050px] h-full flex flex-col gap-[20px]'>
            {CompletedData.map((data,index) =>
            <div key={index} className='w-full  h-[30px] flex flex-row gap-[20px]'>
                <h1  className="w-[15px] h-[30px] flex items-center font-[Nunito] font-bold text-[12px] leading-[16px] text-[#52514E]">
                    <label className="h-[16px]">{data.Num}</label>
                </h1>
                <div className="w-[120px] h-full  flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={calendar} className='h-[20px] w-[20px]'/>
                    <label className='w-[73px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Date}</label>
                </div>
                <div className="w-[153px]  h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={processimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[100px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.task}</label>
                </div>
                
                <div  className="w-[99px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={perksimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[49px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.perks}</label>
                </div>
                <div className=" w-[240px] h-full flex flex-row items-center gap-[5px] ">
                    <img src={titleimg} className='h-[20px] w-[20px]'/>
                    <label className='w-full  h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E1E0D7]'>{data.title}</label>
                </div>
                <div  className="w-[122px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={enroll} className='h-[20px] w-[20px]'/>
                    <label className='w-[72px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Enroll}</label>
                </div>
                <div  className="w-[133px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                    <img src={submit} className='h-[20px] w-[20px]'/>
                    <label className='w-[83px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Submit}</label>
                </div>
            </div>
            )}            
          </div>

          <div className="w-[260px] h-full flex flex-col gap-[20px]">
              {CompletedData.map((data,index) => 
              <div key={index} className='w-full  h-[30px] p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                <label className='w-[271px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>{data.Update}</label>
                <button className="w-[30px] h-[30px]"><img src={register} className='h-[20px] w-[20px]'/></button>
              </div>
              )}  
          </div>
        </div>
    </div>
  )
}
