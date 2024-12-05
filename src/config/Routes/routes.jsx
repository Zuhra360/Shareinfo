import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from './Loader';


const Logout = lazy(() => import("../../components/ui/Dashboard/Logout/Logout"));
const Home = lazy(() => import("../../components/ui/Dashboard/Home/Home"));
const UserSharing = lazy(() => import("../../components/ui/Dashboard/UserSharing/UserSharing"));
const Mentoring = lazy(() => import("../../components/ui/Dashboard/Mentoring/Mentoring"));
const Meeting = lazy(() => import("../../components/ui/Dashboard/Meeting/Meeting"));
const Employee = lazy(() => import("../../components/ui/Dashboard/Employee/Employee"));
const Settings = lazy(() => import("../../components/ui/Dashboard/Settings/Settings"));
const Dashboard = lazy(() => import("../../components/pages/Dashboard"));
const Login = lazy(() => import("../../components/pages/Login"));
const PracticeHome = lazy(() => import("../../components/ui/Dashboard/Meeting/NewAdding/PracticeHome/PracticeHome"));
const Submissions = lazy(() => import("../../components/ui/Dashboard/Meeting/Submissions/SubmissionPage/Submissions"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
      <Login />
    </Suspense>
    ),
  },
  {
    path: "dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "usersharing",
        element: (
          <Suspense fallback={<Loader />}>
            <UserSharing />
          </Suspense>
        ),
        
      },
      {
        path: "mentoring",
        element: (
          <Suspense fallback={<Loader />}>
            <Mentoring />
          </Suspense>
        ),
      },
      {

        path: "meeting",
        element: (
          <Suspense fallback={<Loader />}>
            <Meeting />
          </Suspense>
        ),
        children: [
          {
            path: "managepracticetasks",
            element: (
              <Suspense fallback={<Loader />}>
                <PracticeHome />
              </Suspense>
            ),
          },
          {
            path: "submissions",
            element: (
              <Suspense fallback={<Loader />}>
                <Submissions />
              </Suspense>
            ),
          },  
          
        ],
      },
      {

        path: "settings",
        element:(
          <Suspense fallback={<Loader />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "logout",
        element: (
          <Suspense fallback={<Loader />}>
            <Logout />
          </Suspense>
        ),
      },
      {
        path: "employee",
        element: (
          <Suspense fallback={<Loader />}>
            <Employee />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "managepracticetasks",
    element: (
      <Suspense fallback={<Loader />}>
        <PracticeHome />
      </Suspense>
    ),
  },
  
  
]);