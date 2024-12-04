import { Box } from '@mantine/core'
import { BasicOverview } from '../../NewAdding/PracticeAddPrimary/BasicOverview';
import { AiOutlineHourglass } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import task from "../../../../../../assets/images/PracticeAddFinal/task.png";
import task2 from "../../../../../../assets/images/PracticeAddFinal/taskname.png";
import link from "../../../../../../assets/images/PracticeAddFinal/link.png";
import { FinalData1, FinalData2 } from "../../NewAdding/PracticeAddFinal/FinalData";
import { Steps } from './Steps';
import { TopBar } from './TopBar';
export const ManageTask = () => {
  return (
    <div className='w-[1430px]  h-auto absolute top-[60px] left-[90px] flex items-center justify-center flex-col p-[8px] bg-[#141518]'>
       <TopBar changePage={changePage}/>
        <div className='w-[1390px]  h-auto p-[20px] rounded-[15px] flex items-center justify-center flex-col gap-[20px] '>
          <Box className='w-[1390px]  h-full  p-[20px]  rounded-[20px] flex border border-gray-500  gap-[20px]'>
            <div className='w-[1350px] h-[1155px] p-[20px]  rounded-[10px] flex items-center justify-center flex-col gap-[20px]'>
              <BasicOverview/>
              <Steps/>
            </div>
          </Box>
          
        </div>

        <div className='w-[1390px]  h-[899px] p-[20px] rounded-[20px] flex flex-col gap-[10px] '>
          <div className="w-[1270px] h-[19px] flex items-start ">
              <h1 className='w-[96px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#E6C100]'>Task RoadMap</h1>
          </div>

          <div className='w-full h-[770px]  p-[15px] border border-gray-500  rounded-[10px] flex flex-col gap-[20px]'>
              
                 {FinalData2.map((data,index) =>
                  <Box  key={index} className='w-full h-[345px]  border border-gray-500 rounded-[10px] flex items-center justify-center flex-col gap-[20px]'>
                      <div className="w-[1300px]  h-[305px]  flex flex-col gap-[10px]">
                      <h1 className='w-[54px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#1B94F6]'>{data.text}</h1>
                      <div className="w-full h-[279px]  flex flex-col gap-[20px]">                     
                          <div className='w-full h-[61px]  flex  flex-col gap-[5px]'>
                              <h1 className='w-[79px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Process Name</h1>
                              <div className='w-full h-[40px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                                  <img className='w-[20px] h-[20px]' src={task2}/>
                                  <input className='w-full h-auto bg-inherit text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>  
                              </div>
                          </div>
                          <div className='w-full h-[117px]  flex  flex-col gap-[5px]'>
                              <h1 className='w-[93px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Task Description</h1>
                              <div className='w-full h-[96px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                                  <img className='w-[20px] h-[20px]' src={task}/>
                                  <input className='w-full h-auto bg-inherit text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>
                                     
                              </div>
                          </div>
                          <div className='w-[844px] h-[61px] flex flex-col gap-[10px] align-bottom'>       
                            <h1 className='w-[109px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>URL Field Required</h1>                           
                            <div className='w-full h-[61px] flex flex-row gap-[5px]'>
                              {FinalData1.map((data,index) =>
                                <div key={index} className="w-auto h-full flex flex-row gap-[5px]">
                                    <div className='w-[223px] h-[40px] py-[10px] px-[20px] border border-gray-500 flex justify-center flex-row gap-[5px] rounded-[7px] '>
                                        <img className='w-[20px] h-[20px]' src={link}/>
                                        <p className='w-[153px] h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>{data.title}</p>
                                      </div>
                                    <div className='w-[60px] h-[40px]  py-[10px] px-[20px] border border-gray-500 flex rounded-[7px] '>
                                      <img className='w-[20px] h-[20px] ' src={link} />
                                    </div>
                                </div>
                              )}
                              
                              <div className='w-[20px] h-[40px] flex items-center justify-center rounded-[7px] '>
                                <FiPlus className='w-[20px] h-[20px] text-red-700  '/>
                              </div>
                            </div>
                        </div>

                      </div>

                    </div>
                </Box>
                )}
             <div className='w-full h-[40px] flex justify-start '>
              <button className='w-[152px] h-[40px] px-[10px] py-[10px] border-gray-500 border rounded-[10px] flex justify-center items-center '>
              <label className='w-[112px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Edit / Manage Steps</label>
              </button>
             </div>
          </div>
           
          <div className='w-full h-[40px] flex justify-end '>
            <button onClick={() => changePage('PracticeAddFinal')} className='w-[168px] h-[40px] px-[20px] py-[10px] bg-[#E6C100] rounded-[10px] flex items-center flex-row gap-[5px]'>
            <AiOutlineHourglass className='w-[20px] h-[20px] '/>
            <label className='w-[98px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-black'>Update & Publish</label>
            </button>
          </div>
        </div>
    </div>
  )
}
