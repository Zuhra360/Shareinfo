import { Box } from '@mantine/core'
import { BasicOverview } from './BasicOverview';
import { StepwiseDescription } from './StepwiseDescription';
import { AiOutlineHourglass } from "react-icons/ai";
import { TopBar } from './TopBar';

export const PracticeAddPrimary = ({changePage}) => {
  return (
    <div className='w-[1430px]  h-auto absolute top-[60px] left-[90px] flex flex-col gap-[10px] items-center justify-center p-[8px] bg-[#141518]'>
       <TopBar changePage={changePage}/>
        <div className='w-[1390px]  h-[1001px] p-[20px] rounded-[15px] flex items-center justify-center flex-col gap-[20px] '>
          <Box className='w-[1390px]  h-[941px] p-[20px]  rounded-[20px] flex border border-gray-500  gap-[20px]'>
            <div className='w-[1350px] h-[901px] p-[20px]  rounded-[10px] flex items-center justify-center flex-col gap-[20px]'>
              <BasicOverview/>
              <StepwiseDescription/>
            </div>
          </Box>
          <div className='w-full h-[40px] flex flex-row gap-[20px] justify-end '>
            <button onClick={() => changePage('PracticeHome')} className='w-[120px] h-[40px] px-[20px] py-[10px] bg-[#E6C100] rounded-[10px] flex items-center justify-center '>
            <label className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-black'>Cancel</label>
            </button>
            <button onClick={() => changePage('PracticeAddFinal')} className='w-[139px] h-[40px] px-[20px] py-[10px] bg-[#E6C100] rounded-[10px] flex items-center flex-row gap-[5px]'>
            <AiOutlineHourglass className='w-[20px] h-[20px] '/>
            <label className='w-[69px]  h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-black'>Save & Next</label>
            </button>
          </div>
        </div>
    </div>
  )
}
