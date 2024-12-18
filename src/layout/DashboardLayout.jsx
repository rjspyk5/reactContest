import { useUser } from "../hooks/useUser";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { DrawerForAdmin } from "../components/DrawerForAdmin/DrawerForAdmin";
import { Link, NavLink, Outlet } from "react-router-dom";
import profile from "../assets/profile.png";
import { TbDashboardFilled } from "react-icons/tb";
import logo from "../assets/logo.png";
import { FaRegCalendarCheck, FaUser, FaUserNinja } from "react-icons/fa";

import { MdHelp } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

export const DashboardLayout = () => {
  const { userDetails, isLoading } = useUser();
  console.log(isLoading, userDetails);
  const { user, logout } = useAuth();
  const menu = (
    <>
      <li>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary  transition-colors duration-500 ease-linear`
          }
          end
        >
          <TbDashboardFilled /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="flights"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary  transition-colors duration-500 ease-linear`
          }
          end
        >
          <FaRegCalendarCheck /> Appoinments
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          <FaUser /> My Details
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          <MdHelp /> Help
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          <IoMdChatbubbles /> Feedback
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          <FaUserNinja /> Subcontractors
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="flex">
        {/* left side menu*/}
        <div className="w-[23%] hidden lg:block bg-slate-200 fixed top-0 h-full bg-gradient-to-br ">
          <div className="py-4 px-8">
            <img className="w-20 h-8" src={logo} alt="Certify" />
          </div>

          <hr />
          <ul className="menu w-full space-y-2  p-4">{menu} </ul>
        </div>
        {/* Right side */}

        <div className="flex-1  bg-[#F4F2F3] min-h-screen lg:ml-[23%] w-full">
          {/* Navbar */}
          <div className="flex sticky top-0 w-full justify-between items-center pt-2 pb-[7px]  bg-slate-200  ">
            <DrawerForAdmin menu={menu} />
            <img className="w-20 h-8 lg:hidden" src={logo} alt="" />
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={profile} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-slate-200 *:text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/admin/profile">Profile</Link>
                </li>

                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <Outlet />
        </div>
      </div>
    </>
  );
};
