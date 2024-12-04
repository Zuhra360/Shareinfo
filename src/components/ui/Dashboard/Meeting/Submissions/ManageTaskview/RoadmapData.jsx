import person from "../../../../../../assets/images/PracticeHome/person.png";
import { MdChecklist } from "react-icons/md";
import calendar from "../../../../../../assets/images/Navbar/calendar1.png";
import processimg from "../../../../../../assets/images/PracticeHome/process.png";

export const ButtonData = [
   {
    img : <img src={person} className='h-[20px] w-[20px]'/>,
    title : 'John Doe',
   },
   {
    img : <img src={processimg} className='h-[20px] w-[20px]'/>,
    title : 'Student',
   },
   {
    img :  <MdChecklist className="h-[20px] w-[20px] text-[#34A853]" />,
    title : '11/15',
   },
   {
    img : <img src={calendar} className='h-[20px] w-[20px]'/>,
    title : '28 Aug 2024',
   },


]


export const DesignReviewData = [
   {
      title : 'User Testing',
      label : 'www.usertesting.com/mobileappfeedback.',
   },
   {
      title : 'Figma Plugin Integration',
      label : 'www.figma.com/figmapluginintegration.',
   },
   {
      title : 'Sketch Import Feature',
      label : <label className="text-red-600">Empty</label>,
   },
]
export const FeedbackData = [
   {
      title : 'Code Review',
      label : 'Review code performance and optimize for speed and efficiency',
   },
   {
      title : 'Browser Testing',
      label : 'www.browserstack.com/browsertesting.',
   },
   {
      title : 'Final Approval',
      label : 'Ensure all requirements are met before final approval ',
   },
]

export const PrototypeTestingData = [
   {
      title : 'Color Contrast Check',
      label : 'Check color contrast ratios for accessibility compliance.',
   },
   {
      title : 'User Testing',
      label : <label className="text-red-600">Empty</label>,
   },
   {
      title : 'User Interviews',
      label : 'www.invisionapp.com/userinterviews.',
   },
]
export const AboutDesignData = [
   {
      title : 'Miro Board Attachment',
      label : 'www.miro.com/roadmaptobeauiuxdesignerattachment.',
   },
   {
      title : 'Figma Plugin Integration',
      label : 'www.figma.com/figmapluginintegration.',
   },
   {
      title : 'Sketch Import Feature',
      label : 'www.sketch.com/sketchimportfeature.',
   },
]
