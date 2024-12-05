import { Sidebar } from '../ui/Sidebar/Sidebar'
import { Navbar } from '../ui/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full h-screen bg-[#141518]'>
      <Sidebar/>
      <Navbar/>
      <Outlet/>

    </div>
  )
}
export default Dashboard;