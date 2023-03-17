// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="proListCon">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} itemDetails={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
