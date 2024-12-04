import { useRef } from "react";
import { MdOutlineInsertComment } from "react-icons/md";

export const CommentModal = ({onClose}) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center '>
        <div className='w-[652px] h-[258px] flex bg-[#141518] items-center rounded-[10px] justify-center flex-col'>
            <div className='w-[540px] h-[148px] flex justify-center flex-col gap-[40px]'>
               <div className='w-full h-auto flex justify-center flex-col gap-[10px]'>
                    <h1 className="w-auto h-[22px] font-[Nunito] text-center font-bold text-[16px] leading-[21px] text-[#1B94F6] ">Comment</h1>
                    <div className='w-full h-[40px] px-[20px] py-[10px] flex flex-row border border-gray-600 rounded-[7px] gap-[10px]'>
                        <MdOutlineInsertComment className="h-[20px] w-[20px] text-white"/>
                        <input
                            type='text'
                            name='comment'
                            placeholder='Comment your Remarks'
                            className='w-full h-full bg-[#141518] text-white'/>
                    </div>
               </div>

               <div className="w-full h-[36px] flex justify-center items-center flex-row gap-[10px]">
                 <button onClick={onClose} className="w-[136px] h-full px-[20px] py-[10px] rounded-[10px] bg-[#141518] border border-gray-600 flex justify-center items-center text-white">Close</button>
                 <button onClick={onClose}  className="w-auto h-full px-[20px] py-[10px] rounded-[10px] bg-[#F31919]  flex justify-center items-center text-white">Save & Publish</button>
               </div>
            </div>
           
        </div>

    </div>
  )
}
