import { Outlet } from "react-router"
import { NavLink } from "react-router"

const Body = () => {
  return (
    <>
      <nav className="flex space-x-4 bg-gray-100 p-4">
        <NavLink
          to="/released"
          className={({ isActive }) =>
            `text-gray-700 hover:text-blue-500 font-medium${isActive ? " text-blue-600 underline" : ""}`
          }
        >
          Released
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            `text-gray-700 hover:text-blue-500 font-medium${isActive ? " text-blue-600 underline" : ""}`
          }
        >
          Popular
        </NavLink>
        <NavLink
          to="/top-rated"
          className={({ isActive }) =>
            `text-gray-700 hover:text-blue-500 font-medium${isActive ? " text-blue-600 underline" : ""}`
          }
        >
          Top Rated
        </NavLink>
        <NavLink
          to="/coming-up"
          className={({ isActive }) =>
            `text-gray-700 hover:text-blue-500 font-medium${isActive ? " text-blue-600 underline" : ""}`
          }
        >
          Coming Up
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Body
