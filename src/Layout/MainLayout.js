import { Outlet } from 'react-router-dom'
import Navbar from '../features/Navbar/DashboardNavbar'
 
 const MainLayout = () => {
   return (
     <>
     <div className="">
     <Navbar/>
     <Outlet/>
     </div>
     
  </>
 
   )
 }
 
 export default MainLayout