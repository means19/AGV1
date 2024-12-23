import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CiSearch, CiCalendar } from "react-icons/ci";
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";

const Sidebar = () => {
  // State to manage the collapsed state of the sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the sidebar collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-full ${
        isCollapsed ? "w-16" : "w-64"
      } bg-gradient-to-b from-red-600 to-red-700 shadow-lg pt-4 text-white transition-all duration-300`}
    >
      {/* Header Section */}
      <header className="flex items-center justify-between px-4">
        {/* Logo and Title */}
        {!isCollapsed && (
          <div className="flex items-center">
            <RiAccountCircleLine className="w-12 h-12" />
            <div className="ml-3">
              <h1 className="text-sm font-bold">Nghia Nguyen</h1>
              <p className="text-sm font-light">Student</p>
            </div>
          </div>
        )}
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-full text-red-600 hover:bg-gray-200 focus:outline-none"
        >
          {isCollapsed ? (
            <BiChevronRight size={24} />
          ) : (
            <BiChevronLeft size={24} />
          )}
        </button>
      </header>

      {/* Menu Items */}
      <ul className="mt-8 space-y-4">
        {/* Search */}
        <li>
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group`}
          >
            <CiSearch
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-3 bg-transparent border-b border-gray-200 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
            )}
          </a>
        </li>

        {/* Dashboard */}
        <li>
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group hover:bg-red-500 rounded-lg transition-all`}
          >
            <IoHomeOutline
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </a>
        </li>

        {/* Notifications */}
        <li>
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group hover:bg-red-500 rounded-lg transition-all`}
          >
            <IoNotificationsOutline
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && <span className="ml-3">Notifications</span>}
          </a>
        </li>

        {/* Timetable */}
        <li>
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group hover:bg-red-500 rounded-lg transition-all`}
          >
            <CiCalendar
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && <span className="ml-3">Timetable</span>}
          </a>
        </li>

        {/* To-Do List */}
        <li>
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group hover:bg-red-500 rounded-lg transition-all`}
          >
            <LuListTodo
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && <span className="ml-3">Todo</span>}
          </a>
        </li>

        {/* Logout */}
        <li className="mt-32">
          <a
            href="#"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } h-10 group hover:bg-red-500 rounded-lg transition-all`}
          >
            <IoLogOutOutline
              size={24}
              className="text-white group-hover:text-gray-300"
            />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
