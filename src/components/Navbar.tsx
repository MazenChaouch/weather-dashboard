import { NavLink } from "react-router-dom";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Weather Dashboard</h1>
        <div className="space-x-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-white hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-white hover:underline"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
