import task2 from "../../../../../../assets/images/PracticeAddPrimary/task2.png"

export const StepwiseDescription = () => {
  return (
    
    <div className='w-full h-[370px] p-[20px] border border-gray-500 rounded-[10px] flex flex-col gap-[20px]'>
                <h1 className='w-[119px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Stepwise Description</h1>
                
                <div className='w-full h-[234px]  flex  flex-col gap-[20px]'>
                    <h1 className='w-[37px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Step 1</h1>
                    <div className='w-full h-[61px]  flex  flex-col gap-[5px]'>
                        <h1 className='w-[62px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Step Name</h1>
                        <div className='w-full h-[40px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                            <img className='w-[20px] h-[20px]' src={task2}/>
                            <input className=' h-auto w-full bg-inherit  text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>
                        </div>
                    </div>
                    <div className='w-full h-[117px]  flex  flex-col gap-[5px]'>
                        <h1 className='w-[64px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Description</h1>
                        <div className='w-full h-[96px] min-w-[590px] py-[10px] px-[20px] border border-gray-500 rounded-[7px] flex flex-row gap-[10px]'>
                            <img className='w-[20px] h-[20px]' src={task2}/>
                            <input className=' h-auto w-full bg-inherit  text-[#8B8B8B] font-[Nunito] font-semibold text-[14px] leading-[19px]'/>
                        </div>
                    </div>
                </div>

                <div className='w-[197px] h-[40px]  py-[10px] px-[10px] border border-gray-500 rounded-[7px] flex justify-center gap-[5px]'>
                    <label className='w-[157px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#E6C100]'>Add More Steps Description</label>
                </div>

                

    </div>
   
  )
}
