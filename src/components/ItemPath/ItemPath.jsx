import { Link } from "react-router-dom"

export const ItemPath = ({category, continent, country}) => {

  return (
    <ul className="flex flex-row my-5">
      <li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700"><Link to={`/category/${category}`}>{category}</Link></li>
      <li className="text-4xl text-green-700">/</li>
      <li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700"><Link to={`/category/${category}/continent/${continent}`}>{continent}</Link></li>
      <li className="text-4xl text-green-700">/</li>
      <li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700"><Link to={`/category/${category}/${country}`}>{country}</Link></li>      
    </ul>
  )
}
