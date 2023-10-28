import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Profile from './components/Profile'
import { Payments } from './components/Payments'
import SinglePost from './components/SinglePost'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
