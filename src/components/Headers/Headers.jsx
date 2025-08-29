import { NavLink } from "react-router-dom";

export default function Headers() {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/listed-book", name: "Listed Book" },
    { path: "/page-to-read", name: "Page To Read" },
    {path: "/dashboard", name: "Dashboard"}
  ];

  return (
    <div className="navbar bg-gray-700 text-white  shadow-sm">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-green-400 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : ""
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl text-green-500 ">
          Maruf  Book
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path}
                className={({ isActive })  =>
                  isActive ? "text-green-500 font-semibold" : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn mr-1 bg-green-600">Sign In</a>
          <a className="btn  bg-blue-500">Sign Up</a>
      </div>
    </div>
  );
}
