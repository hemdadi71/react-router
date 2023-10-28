import { Link } from 'react-router-dom'
const Posts = () => {
  return (
    <div className="h-full">
      <h1>Posts Page</h1>
      <nav className='flex flex-col gap-4'>
        <Link to="/posts/1">Post 1</Link>
        <Link to="/posts/2">Post 2</Link>
        <Link to="/posts/3">Post 3</Link>
      </nav>
    </div>
  )
}

export default Posts
