import { NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className="h-full flex gap-5">
      <div className='flex flex-col gap-3'>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payments</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard
