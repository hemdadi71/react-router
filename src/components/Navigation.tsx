import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="border-b flex items-center justify-center py-5">
      <ul className="flex items-center gap-10 font-bold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
