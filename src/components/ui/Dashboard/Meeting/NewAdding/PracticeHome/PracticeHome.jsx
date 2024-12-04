import add from "../../../../../../assets/images/PracticeHome/add.png";
import account from "../../../../../../assets/images/PracticeHome/account.png";
import { OngoingTask } from "./OngoingTask";
import { RecentSubmission } from "./RecentSubmission";
import { TopBar } from "./TopBar";

export const PracticeHome = ({ changePage }) => {
  return (
    <div className='w-[1430px] h-auto absolute  top-[60px] left-[90px] flex flex-col gap-[10px] p-[8px] bg-[#141518]'>
        <TopBar changePage={changePage}/>
        <div className='w-[378px] h-[40px] flex flex-row gap-[20px]'>
            <button onClick={() => changePage('PracticeAddPrimary')} className='w-[181px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                <img src={add} className='h-[20px] w-[20px]'/>
                <label className='w-[131px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Create an Practice Task</label>
            </button>
            <button onClick={() => changePage('CategorywiseView')} className='w-[177px] h-full p-[10px] rounded-[10px] shadow-inner shadow-[#FFFFFF30] flex items-center flex-row gap-[10px]'>
                <img src={account} className='h-[20px] w-[20px]'/>
                <label className='w-[127px] h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>Manage Practice Tasks</label>
            </button>
        </div>

        <div className="w-[1400px] h-[730px] flex flex-col gap-[20px]">
          <OngoingTask changePage={changePage}/>
          <RecentSubmission/>
        </div>
        
        
    </div>
  )
}
