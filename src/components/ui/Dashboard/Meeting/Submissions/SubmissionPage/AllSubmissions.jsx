import { MdChecklist } from "react-icons/md";
import RecentSubmissionimg from "../../../../../../assets/images/PracticeHome/RecentSubmissionimg.png";
import filter from "../../../../../../assets/images/PracticeHome/filter.png";
import sort from "../../../../../../assets/images/PracticeHome/sort.png";
import {  AllSubmissionDetails } from '../SubmissionData';
import person from "../../../../../../assets/images/PracticeHome/person.png";
import register from "../../../../../../assets/images/PracticeHome/register.png";
import titleimg from "../../../../../../assets/images/PracticeHome/title.png";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import processimg from "../../../../../../assets/images/PracticeHome/process.png";
export const AllSubmissions = ({changePage}) => {
  return (
    <div className="w-full h-[780px] p-[20px] rounded-[15px] border border-gray-200 flex flex-col items-center  gap-[20px]">
            <div className="w-[1350px]  h-[40px] flex justify-between flex-row">
                <div className="w-[140px] h-full flex ">
                  <button className='w-full h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <img src={RecentSubmissionimg} className='h-[20px] w-[20px]'/>
                    <label className='w-[90px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#34A853]'>All Submissions</label>
                  </button>
                </div>

                <div className="w-[175px] h-full flex flex-row gap-[20px]">
                  <button className='w-[80px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <label className='w-[30px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Filter</label>
                    <img src={filter} className='h-[20px] w-[20px]'/>
                  </button>
                  <button className='w-[75px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <label className='w-[25px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Sort</label>
                    <img src={sort} className='h-[20px] w-[20px]'/>
                  </button>
                </div>
            </div>

            <div className='w-full h-[680px]  flex justify-between'>
               <div className='w-[830px] h-full flex flex-col gap-[20px]'>
                {AllSubmissionDetails.map((data,index) =>
                <div key={index} className='w-full  h-[30px] flex flex-row gap-[20px]'>
                    <h1  className="w-[15px] h-[30px] flex items-center font-[Nunito] font-bold text-[12px] leading-[16px] text-[#52514E]">
                        <label className="h-[16px]">{data.Num}</label>
                    </h1>
                    <div className="w-[83px] h-full  flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <MdChecklist className="h-[20px] w-[20px] text-[#34A853]" />
                        <label className='w-[33px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.total}</label>
                    </div>
                    <button onClick={() => changePage('SubmissionRoadmap')} className="w-[146px]  h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={person} className='h-[20px] w-[20px]'/>
                        <label className='w-auto  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Name}</label>
                    </button>
                    
                    <div  className="w-[95px] h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={processimg} className='h-[20px] w-[20px]'/>
                        <label className='w-[45px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Status}</label>
                    </div>
                    <div className="w-[120px] h-full  flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={calendar} className='h-[20px] w-[20px]'/>
                        <label className='w-[73px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Date}</label>
                    </div>
                    <div className=" w-[260px] h-full flex flex-row items-center gap-[5px] ">
                        <img src={titleimg} className='h-[20px] w-[20px]'/>
                        <label className='w-[220px]  h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E1E0D7]'>{data.title}</label>
                    </div>
                   
                </div>
            )}            
          </div>

          <div className="w-[260px] h-full flex flex-col gap-[20px]">
              {AllSubmissionDetails.map((data,index) => 
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
