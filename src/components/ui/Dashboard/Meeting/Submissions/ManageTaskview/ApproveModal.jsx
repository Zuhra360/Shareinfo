import { MdChecklist,MdOutlineInsertComment } from "react-icons/md";
import link from "../../../../../../assets/images/PracticeAddFinal/link.png";
import handeye from "../../../../../../assets/images/Submissions/hand_eye.png";


export const ApproveModal = ({ApproveClose}) => {
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center '>
        <div className='w-[682px] h-[339px] py-[50px] px-[100px] flex bg-[#141518] items-center rounded-[50px] justify-center flex-col'>
            <div className='w-[482px] h-[239px] flex justify-center flex-col gap-[40px]'>
                <div className='w-full h-auto flex items-center justify-center flex-col gap-[20px]'>
                        <h1 className="w-auto h-[22px] font-[Nunito] text-center font-bold text-[16px] leading-[21px] text-[#1B94F6] ">Task Approval</h1>
                        <div className='w-full h-[61px] gap-[10px] flex flex-row'>
                            <div className='w-[365px] h-full flex flex-col gap-[5px]'>
                                <h1 className='w-auto h-[16px] font-[Nunito] text-start font-bold text-[12px] leading-[16px] text-white'>Miro URL</h1>
                                <button  className="w-full  h-[40px] flex flex-row py-[10px] px-[20px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                                    <img src={link} className='h-[20px] w-[20px]'/>
                                    <label className='w-auto h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>www.browserstack.com/browsertesting.</label>
                                    <img src={handeye} className='h-[20px] w-[20px]'/>
                                </button>
                            </div>
                            <div className='w-[107px] h-full flex flex-col gap-[5px]'>
                                <h1 className='w-auto flex flex-row gap-[10px]'><label className="w-auto h-[16px] font-[Nunito] text-start font-bold text-[12px] leading-[16px] text-white">Perks</label><label className='w-auto h-[14px] text-[#52514E] leading-[13px] text-[12px] '>(Max.5)</label></h1>
                                <button  className="w-full  h-[40px] flex flex-row py-[10px] px-[20px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                                    <MdChecklist className="h-[20px] w-[20px] text-[#34A853]" />
                                    <label className='w-auto h-[19px] font-[Nunito] font-bold text-[14px] leading-[19px] text-[#8B8B8B]'>Perks</label>
                                </button>
                            </div>
                        </div>
                        <div className='w-[280px] h-[40px] px-[20px] py-[10px] flex flex-row border border-gray-600 rounded-[7px] gap-[10px]'>
                            <MdOutlineInsertComment className="h-[20px] w-[20px] text-white"/>
                            <input
                                type='text'
                                name='comment'
                                placeholder='Comment Your Remarks here'
                                className='w-full h-full bg-[#141518] text-white'/>
                        </div>
                </div>

                <div className="w-full h-[36px] flex justify-center items-center flex-row gap-[10px]">
                    <button onClick={ApproveClose} className="w-[136px] h-full px-[20px] py-[10px] rounded-[10px] bg-[#141518] border border-gray-600 flex justify-center items-center text-white">Close</button>
                    <button onClick={ApproveClose}  className="w-auto h-full px-[20px] py-[10px] rounded-[10px] bg-[#34A853]  flex justify-center items-center text-white">Save & Approve</button>
                </div>
            </div>
        
        </div>

    </div>
  )
}
