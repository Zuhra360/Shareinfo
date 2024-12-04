import { Box } from '@mantine/core'
import shareinfologo from "../../../assets/images/Navbar/shareinfologo.png";
import arrow from "../../../assets/images/Navbar/arrow.png";


export const Navbar = () => {
  return (
    <div className='w-[1430px] h-auto absolute left-[90px] top-0 bg-[#141518] overflow-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Box className='w-full h-[60px] border-b-[0.5px] py-[15px] flex items-center flex-row gap-[10px] '>
            <div className='w-[406px] h-[30px] py-[20px] flex items-center justify-center flex-row gap-[5px]'>
                <div className='w-[366px] h-full flex gap-[5px] items-center  flex-row'>
                    <div className='w-[195px] h-full py-[5px] flex items-center flex-row gap-[10px]'>
                        <img src={shareinfologo} className='h-[20px] w-[20px]'/>
                        <label className='w-[165px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>ShareInfo Super Admin Panel</label>
                    </div>
                    <div className='w-[166px] h-[30px] py-[5px] flex items-center flex-row gap-[10px]'>
                        <img src={arrow} className='h-[20px] w-[20px]'/>
                        <label className='w-[136px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Akshay Ashokan Pothan</label>
                    </div>
                </div>
            </div>
        </Box>
        

    </div>
  )
}
