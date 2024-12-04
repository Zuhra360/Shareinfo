import { useState } from "react";
import coding from "../../../../../../assets/images/PracticeAddPrimary/coding.png";
import task from "../../../../../../assets/images/PracticeAddPrimary/task.png";
import upload from "../../../../../../assets/images/PracticeAddPrimary/upload.png";
import taskname from "../../../../../../assets/images/PracticeAddPrimary/taskname.png";
import { PracticeData } from './PracticeAddData';
import { FiPlus } from "react-icons/fi";


export const BasicOverview = () => {
  const [containers, setContainers] = useState([1]); 

  const addContainer = () => {
    setContainers([...containers, containers.length + 1]);
  };

  return (
    
    <div className='w-full h-[511px] p-[20px] border border-gray-500 rounded-[10px] flex flex-col gap-[20px]'>
                <h1 className='w-[86px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Basic Overview</h1>
                <div className='w-full h-[142px]  flex flex-wrap gap-[20px]'>
                      <div className='w-[180px] h-[61px] flex flex-col gap-[5px]'>
                          <h1 className='w-[52px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Category </h1>
                          <div className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex flex-row gap-[10px] rounded-[7px] '>
                            <img className='w-[20px] h-[20px]' src={coding}/>
                            <input className='w-full bg-inherit h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'
                              />
                          </div>
                      </div>
                      <div className='w-[590px] h-[61px] flex flex-col gap-[5px]'>
                          <h1 className='w-[109px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Practice Task Name </h1>
                          <div className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex flex-row gap-[10px] rounded-[7px] '>
                            <img className='w-[20px] h-[20px]' src={taskname}/>
                            <input className='w-full h-[19px] bg-inherit font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'
                            />
                            
                          </div>
                      </div>
                      <div className='w-[211px] h-[61px] flex flex-col gap-[5px]'>
                          <h1 className='w-[78px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Banner Image </h1>
                          <div className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex flex-row gap-[10px] rounded-[7px] '>
                            <img className='w-[20px] h-[20px]' src={upload}/>
                            <input className='h-auto w-full bg-inherit  h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'
                            type="file"
                            accept=".jpeg,.png"
                            placeholder="no file"/>
                          </div>
                      </div>
                      <div className='w-[180px] h-[61px] flex flex-col gap-[5px]'>
                          <h1 className='w-[111px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Total Practice Perks </h1>
                          <div className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex flex-row gap-[10px] rounded-[7px] '>
                            <img className='w-[20px] h-[20px]' src={coding}/>
                            <input className='w-full bg-inherit h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'/>
                          </div>
                      </div>
                      <div className='w-[180px] h-[61px] flex flex-col gap-[5px]'>
                          <h1 className='w-[50px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Deadline</h1>
                          <div className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex flex-row gap-[10px] rounded-[7px] '>
                            <img className='w-[20px] h-[20px]' src={coding}/>
                            <input className='w-full bg-inherit h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'/>
                          </div>
                      </div>
                      <div className='w-auto  h-auto flex flex-col gap-[10px] align-bottom'>       
                          <h1 className='w-[85px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Sub Categories</h1>                           
                         <div className='w-auto h-[61px] flex flex-row gap-[5px]'>
                         {containers.map((container, index) => (
                          <div key={index} className='w-full h-[40px] py-[10px] px-[20px] border border-gray-500 flex justify-center flex-row gap-[10px] rounded-[7px] '>
                          <img className='w-[20px] h-[20px]' src={coding}/>
                          <input className='w-full bg-inherit h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'/>
                          </div>
                         ))}
                            <button onClick={addContainer} className='w-[20px] h-[40px] flex items-center justify-center rounded-[7px] '>
                              <FiPlus className='w-[20px] h-[20px] text-red-700  '/>
                            </button>
                          </div>
                      </div>
                </div>
                <div className='w-full h-[98px]  flex  flex-col gap-[5px]'>
                  <h1 className='w-[93px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Task Description</h1>
                  <div className='w-full h-[77px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                    <img className='w-[20px] h-[20px]' src={task}/>
                    <input className=' h-auto w-full bg-inherit text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>
                  </div>
                </div>

                <div className='w-full h-[155px]  flex  flex-row gap-[20px]'>
                  {PracticeData.map((data,index) =>
                  <div key={index} className='w-[625px] h-full  flex  flex-col gap-[5px]'>
                    <h1 className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>{data.title}</h1>
                    <div className='w-full h-[134px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                      <img className='w-[20px] h-[20px]' src={task}/>
                      <input className=' h-auto w-full bg-inherit text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>
                    </div>
                  </div>
                  )}  
                </div>

    </div>
  )
}
