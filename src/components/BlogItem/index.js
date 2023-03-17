// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li className="proListItem">
      <div className="titleCon">
        <h1 className="titleH">{title}</h1>
        <p className="proDate">{publishedDate}</p>
      </div>
      <p className="proDesc">{description}</p>
      <hr className="hrEl" />
    </li>
  )
}

export default BlogItem
