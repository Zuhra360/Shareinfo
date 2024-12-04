import { createBrowserRouter } from "react-router-dom";
import { Logout } from "../../components/ui/Dashboard/Logout/Logout";
import { Home } from "../../components/ui/Dashboard/Home/Home";
import { UserSharing } from "../../components/ui/Dashboard/UserSharing/UserSharing";
import { Mentoring } from "../../components/ui/Dashboard/Mentoring/Mentoring";
import { Meeting } from "../../components/ui/Dashboard/Meeting/Meeting";
import { Employee } from "../../components/ui/Dashboard/Employee/Employee";
import { Settings } from "../../components/ui/Dashboard/Settings/Settings";
import { Dashboard } from "../../components/pages/Dashboard";
import { Login } from "../../components/pages/Login";
import { PracticeHome } from "../../components/ui/Dashboard/Meeting/NewAdding/PracticeHome/PracticeHome";
import { Submissions } from "../../components/ui/Dashboard/Meeting/Submissions/SubmissionPage/Submissions";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "usersharing",
        element: <UserSharing />,
        
      },
      {
        path: "mentoring",
        element: <Mentoring />,
      },
      {

        path: "meeting",
        element: <Meeting/>,
        children: [
          {
            path: "managepracticetasks",
            element: <PracticeHome/>,
          },
          {
            path: "submissions",
            element: <Submissions/>,
            
          },  
          
        ],
      },
      {

        path: "settings",
        element: <Settings/>,
      },
      {
        path: "logout",
        element: <Logout/>,
      },
      {
        path: "employee",
        element: <Employee/>,
      },
    ],
  },
  {
    path: "managepracticetasks",
    element: <PracticeHome/>,
  },
  
  
]);