import { Link } from "react-router-dom"

export const ItemPath = ({category, continent, country}) => {

  return (
    <ul className="flex flex-row my-5">
      <Link to={`/category/${category}`}><li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700">{category}</li></Link>
      <li className="text-4xl text-green-700">/</li>
      <Link to={`/category/${category}/continent/${continent}`}><li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700">{continent}</li></Link>
      <li className="text-4xl text-green-700">/</li>
      <Link to={`/category/${category}/${country}`}>
        <li className="border text-green-700 mx-2 px-4 text-3xl hover:text-white hover:bg-green-700">
        {country}</li></Link>      
    </ul>
  )
}
