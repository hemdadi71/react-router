
import { useParams } from 'react-router-dom'
const SinglePost = () => {
  const params = useParams()
  return <div>SinglePost {params.id}</div>
}

export default SinglePost
