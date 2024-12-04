import task from "../../../../../../assets/images/PracticeHome/task.png";
import seeall from "../../../../../../assets/images/PracticeHome/seeall.png";
import filter from "../../../../../../assets/images/PracticeHome/filter.png";
import sort from "../../../../../../assets/images/PracticeHome/sort.png";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import processimg from "../../../../../../assets/images/PracticeHome/process.png";
import perksimg from "../../../../../../assets/images/PracticeHome/perks.png";
import titleimg from "../../../../../../assets/images/PracticeHome/title.png";
import register from "../../../../../../assets/images/PracticeHome/register.png";
import {  OngoingData} from "./PracticeData";

export const OngoingTask = ( {changePage} ) => {
  return (
    
        <div className="w-full h-[430px] p-[20px] rounded-[15px] border border-gray-200 flex flex-col items-center  gap-[20px]">
            <div className="w-[1350px]  h-[40px] flex justify-between flex-row">

                <div className="w-[292px] h-full flex flex-row gap-[20px]">
                  <button className='w-[181px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                    <img src={task} className='h-[20px] w-[20px]'/>
                    <label className='w-[131px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Ongoing Practice Tasks</label>
                  </button>
                  <button className='w-[91px] h-full p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                    <img src={seeall} className='h-[20px] w-[20px]'/>
                    <label className='w-[41px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>See All</label>
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

            <div className="w-[1350px]  h-[330px] flex justify-between flex-row">
                <div  className="w-[965px]  h-full flex  flex-row gap-[20px]">
                    <div className="w-[15px]  h-full  flex flex-col gap-[20px]">
                    {OngoingData.map((data,index) =>
                      <h1 key={index}  className="w-full h-[30px] flex items-center font-[Nunito] font-bold text-[12px] leading-[16px] text-[#52514E]">
                        <label className="h-[16px]">{data.Num}</label>
                      </h1>
                    )}
                     </div>
                    
                    <div className="w-[120px]  h-full flex flex-col gap-[20px]">
                        {OngoingData.map((data,index) =>
                        <div key={index} className="w-full h-full flex flex-row px-[5px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={calendar} className='h-[20px] w-[20px]'/>
                        <label className='w-[73px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.Date}</label>
                        </div>
                        )}
                    </div>

                    <div className="w-[143px]  h-full flex flex-col gap-[20px]">
                    {OngoingData.map((data,index) =>
                      <div key={index} className="w-auto inline-block  max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={processimg} className='h-[20px] w-[20px]'/>
                        <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.task}</label>
                      </div>
                     )} 
                    </div>

                    <div className="w-[125px]  h-full flex flex-col gap-[20px]">
                    {OngoingData.map((data,index) =>
                      <div key={index} className="w-full h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                         <img src={processimg} className='h-[20px] w-[20px]'/>
                         <label className='w-[75px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.process}</label>
                      </div>
                     )}
                    </div>

                    <div className="w-[99px]  h-full flex flex-col gap-[20px]">
                    {OngoingData.map((data,index) =>
                      <div key={index} className="w-full h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                          <img src={perksimg} className='h-[20px] w-[20px]'/>
                          <label className='w-[49px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.perks}</label>
                      </div>
                     )}
                    </div>

                    <div className="w-[283px]  h-full flex flex-col gap-[20px]">
                    {OngoingData.map((data,index) =>
                      <button onClick={() => changePage('ManageTask')} key={index} className=" w-full h-full flex flex-row items-center gap-[5px] ">
                          <img src={titleimg} className='h-[20px] w-[20px]'/>
                          <label className='w-[258px]  h-[19px] font-[Nunito] font-bold text-start text-[14px] leading-[19px] text-[#E1E0D7]'>{data.title}</label>
                      </button>
                     )}    
                    </div>
                </div>

               <div className="w-[260px] h-full flex flex-col gap-[20px]">
                  {OngoingData.map((data,index) => 
                    <div key={index} className='w-full  h-[30px] p-[10px] rounded-[10px] flex items-center flex-row gap-[10px]'>
                    <label className='w-[271px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>{data.update}</label>
                    <button className="w-[30px] h-[30px]"><img src={register} className='h-[20px] w-[20px]'/></button>
                  </div>
                  )}  
               </div>

            </div>
          </div>
   
  )
}
