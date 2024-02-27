// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardItems} = props
  const {title, description, imgUrl, className} = cardItems

  return (
    <li className={`${className} each-card`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
