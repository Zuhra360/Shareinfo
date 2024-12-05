import React, { useState } from "react";
import { PracticeHome } from '../Meeting/NewAdding/PracticeHome/PracticeHome'
import { PracticeAddPrimary } from '../Meeting/NewAdding/PracticeAddPrimary/PracticeAddPrimary'
import { PracticeAddFinal } from "../Meeting/NewAdding/PracticeAddFinal/PracticeAddFinal";
import { CategorywiseView } from "../Meeting/ManagePractice/CetegorywiseView/CategorywiseView";
import { ManageTask } from "../Meeting/ManagePractice/ManageTask/ManageTask";
import { ManageTaskwiseView } from "../Meeting/Submissions/ManageTaskwiseView";
import { SubmissionRoadmap } from "./Submissions/ManageTaskview/SubmissionRoadmap";
import { Submissions } from "./Submissions/SubmissionPage/Submissions";
import { Practicewise } from "./LeaderBoard/Practicewise/Practicewise";
import { WeeklyPage } from "./LeaderBoard/Weekly/WeeklyPage";

 const Meeting = () => {
  const [currentPage, setCurrentPage] = useState('PracticeHome');
  // const [activeButton, setActiveButton] = useState('');
  const changePage = (page) => {
    setCurrentPage(page);
    // setActiveButton(page);
  };

  return (
    <div className='w-[1430px-90px] h-auto flex flex-col gap-[20px] p-[8px] bg-[#141518] overflow-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
       
       
        {currentPage === 'PracticeHome' && <PracticeHome changePage={changePage}/>}
        {currentPage === 'PracticeAddPrimary' && <PracticeAddPrimary changePage={changePage} />}
        {currentPage === 'PracticeAddFinal' && <PracticeAddFinal changePage={changePage}/>}
        {currentPage === 'CategorywiseView' && <CategorywiseView  changePage={changePage}/>}
        {currentPage === 'ManageTask' && <ManageTask />}
        {currentPage === 'Submissions' && <Submissions changePage={changePage}/>}
        {currentPage === 'ManageTaskwiseView' && <ManageTaskwiseView changePage={changePage} />}
        {currentPage === 'SubmissionRoadmap' && <SubmissionRoadmap changePage={changePage}/>}
        {currentPage === 'Practicewise' && <Practicewise changePage={changePage}/>}
        {currentPage === 'WeeklyPage' && <WeeklyPage changePage={changePage}/>}
 

    </div>
  )
}
export default Meeting;