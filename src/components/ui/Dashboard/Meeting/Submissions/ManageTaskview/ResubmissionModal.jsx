import link from "../../../../../../assets/images/PracticeAddFinal/link.png";
import handeye from "../../../../../../assets/images/Submissions/hand_eye.png";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import { MdOutlineInsertComment } from "react-icons/md";

export const ResubmissionModal = ({ResubmissionClose}) => {
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center '>
        <div className='w-[682px] h-[339px] py-[50px] px-[100px] flex bg-[#141518] items-center rounded-[50px] justify-center flex-col'>
            <div className='w-[514px] h-[239px] flex justify-center flex-col gap-[40px]'>
            <div className='w-full h-auto flex justify-center flex-col gap-[20px]'>
                    <h1 className="w-auto h-[22px] font-[Nunito] text-center font-bold text-[16px] leading-[21px] text-[#1B94F6] ">Resubmission Request</h1>
                    <div className='w-full h-[61px] gap-[10px] flex flex-row'>
                        <div className='w-[365px] h-full flex flex-col gap-[5px]'>
                            <h1 className='w-auto h-[16px] font-[Nunito] text-start font-bold text-[12px] leading-[16px] text-white'>Miro URL</h1>
                            <button  className="w-full  h-[40px] flex flex-row py-[10px] px-[20px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                                <img src={link} className='h-[20px] w-[20px]'/>
                                <label className='w-auto h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>www.browserstack.com/browsertesting.</label>
                                <img src={handeye} className='h-[20px] w-[20px]'/>
                            </button>
                        </div>
                        <div className='w-[139px] h-full flex flex-col gap-[5px]'>
                            <h1 className='w-auto h-[16px] font-[Nunito] text-start font-bold text-[12px] leading-[16px] text-white'>Extended Date</h1>
                            <button  className="w-full  h-[40px] flex flex-row py-[10px] px-[20px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                                <img src={calendar} className='h-[20px] w-[20px]'/>
                                <label className='w-auto h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>dd-mm-yy</label>
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-[40px] px-[20px] py-[10px] flex flex-row border border-gray-600 rounded-[7px] gap-[10px]'>
                        <MdOutlineInsertComment className="h-[20px] w-[20px] text-white"/>
                        <input
                            type='text'
                            name='comment'
                            placeholder='Reason for Rejection'
                            className='w-full h-full bg-[#141518] text-white'/>
                    </div>
            </div>

            <div className="w-full h-[36px] flex justify-center items-center flex-row gap-[10px]">
                <button onClick={ResubmissionClose} className="w-[136px] h-full px-[20px] py-[10px] rounded-[10px] bg-[#141518] border border-gray-600 flex justify-center items-center text-white">Close</button>
                <button onClick={ResubmissionClose}  className="w-auto h-full px-[20px] py-[10px] rounded-[10px] bg-[#F31919]  flex justify-center items-center text-white">Save & Reject</button>
            </div>
            </div>
        
        </div>

    </div>
  )
}
