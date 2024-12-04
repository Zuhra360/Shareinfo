import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PrototypeTestingData } from "./RoadmapData";
import link from "../../../../../../assets/images/PracticeAddFinal/link.png";
import { MdChecklist,MdOutlineInsertComment } from "react-icons/md";
import handeye from "../../../../../../assets/images/Submissions/hand_eye.png";
import swipeleft from "../../../../../../assets/images/Submissions/swipe_left.png";
import { useState } from "react";
import { ResubmissionModal } from "./ResubmissionModal";
import { CommentModal } from "./CommentModal";
import { ApproveModal } from "./ApproveModal";

export const PrototypeTesting = () => {
    const [showModal,setShowModal] = useState(false);
    const [showResubmissionModal,setShowResubmissionModal] = useState(false);
    const [showApproveModal,setShowApproveModal] = useState(false);
  return (
    <div   className='w-full h-auto  p-[20px]  border border-gray-500 rounded-[10px] flex items-center justify-center flex-col gap-[20px]'>
        <div className="w-[1300px]  h-auto flex flex-col gap-[10px]">
            <div className="w-full h-[22px] flex justify-between">
                <h1 className='w-auto h-[22px] font-[Nunito] font-bold text-[16px] leading-[21px] text-[#1B94F6]'>Prototype Testing</h1>
                <AiOutlineExclamationCircle className="w-[20px] h-[20px] text-gray-500"/>
            </div>
        
            <div className="w-auto h-auto flex flex-col gap-[20px]"> 
                {PrototypeTestingData.map((data,index) =>
                <div key={index} className="w-auto h-auto flex flex-col gap-[10px] ">
                    <h1 className='w-auto h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-white'>{data.title}</h1>
                   <div className="w-auto h-[40px] flex flex-row gap-[10px] ">
                        <button  className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={link} className='h-[20px] w-[20px]'/>
                        <label className='w-auto   max-w-max inline-block h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>{data.label}</label>
                        </button>
                    
                        <button  className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                        <img src={handeye} className='h-[20px] w-[20px]'/>
                        </button>

                        <button onClick={() => setShowApproveModal(true)} className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                            <MdChecklist className="h-[20px] w-[20px] text-[#34A853]" />
                            <label className='w-auto   max-w-max inline-block h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Accept</label>
                        </button>
                        {showApproveModal &&  <ApproveModal ApproveClose={() => setShowApproveModal(false)}/> }
                        <button onClick={() => setShowResubmissionModal(true)} className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                            <img src={swipeleft} className='h-[20px] w-[20px]'/>
                            <label className='w-auto   max-w-max inline-block h-[16px] font-[Nunito] font-bold text-[12px] leading-[16px] text-[#8B8B8B]'>Re Submission</label>
                        </button>
                        {showResubmissionModal &&  <ResubmissionModal ResubmissionClose={() => setShowResubmissionModal(false)}/> }
                        <button onClick={() => setShowModal(true)}  className="w-auto max-w-max h-full flex flex-row py-[5px] px-[10px] shadow-inner shadow-[#FFFFFF40] rounded-[7px] items-center gap-[10px] ">
                            <MdOutlineInsertComment className="h-[20px] w-[20px] text-white"/>
                        </button>
                        {showModal &&  <CommentModal onClose={() => setShowModal(false)}/> }
                    </div>
                </div> 
                )}                       
            </div>                   
        

        </div>
   </div>

  )
}
