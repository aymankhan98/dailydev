import React, { useState } from "react";
import {
  Home,
  Plus,
  Users,
  Flame,
  MessageSquare,
  Hash,
  Globe,
  Award,
  Link,
  Bookmark,
  Clock,
} from "lucide-react";

// Sidebar data configuration
const sidebarData = [
  {
    section: "",
    items: [
      { icon: <Home size={18} />, text: "myFeed" },
      { icon: <Plus size={18} />, text: "Custom feed" },
    ],
  },
  {
    section: "Squads",
    items: [
      { icon: <Users size={18} />, text: "Public Squads" },
      {
        icon: (
          <img
            src="/api/placeholder/24/24"
            alt="controversy.dev"
            className="w-5 h-5 rounded"
          />
        ),
        text: "controversy.dev",
      },
      {
        icon: (
          <img
            src="/api/placeholder/24/24"
            alt="daily.dev changelog"
            className="w-5 h-5 rounded"
          />
        ),
        text: "daily.dev changelog",
      },
      {
        icon: (
          <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs">
            N
          </div>
        ),
        text: "NexUS",
      },
      { icon: <Plus size={18} />, text: "New Squad" },
    ],
  },
  {
    section: "Discover",
    items: [
      { icon: <Flame size={18} />, text: "Explore" },
      { icon: <MessageSquare size={18} />, text: "Discussions" },
      { icon: <Hash size={18} />, text: "Tags" },
      { icon: <Globe size={18} />, text: "Sources" },
      { icon: <Award size={18} />, text: "Leaderboard" },
    ],
  },
  {
    section: "Activity",
    items: [
      { icon: <Link size={18} />, text: "Submit a link" },
      { icon: <Bookmark size={18} />, text: "Bookmarks" },
      { icon: <Clock size={18} />, text: "History" },
    ],
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex mr-10">
      <aside
        className={`group relative ${
          isCollapsed ? "w-16" : "w-64"
        } border-r border-[#444343] text-gray-300 p-4 transition-all duration-300`}
      >
        {/* Collapse/Expand button */}
        <button
          className={`absolute top-4 -right-4 bg-white border border-gray-500 text-black rounded-xl p-2 hover:bg-gray-200 focus:outline-none transition-opacity duration-300 ${
            isCollapsed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          onClick={toggleSidebar}
        >
          {/* Icon changes direction based on isCollapsed */}
          <svg
            className={`transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="mt-10">
          {sidebarData.map((section, idx) => (
            <div className="mb-6" key={idx}>
              {/* Hide section headers when collapsed */}
              {!isCollapsed && (
                <h3 className="text-xs uppercase font-semibold mb-2">
                  {section.section}
                </h3>
              )}
              <div className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <SidebarItem
                    key={itemIdx}
                    icon={item.icon}
                    text={item.text}
                    isCollapsed={isCollapsed}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

const SidebarItem = ({
  icon,
  text,
  isCollapsed,
}: {
  icon: JSX.Element;
  text: string;
  isCollapsed: boolean;
}) => (
  <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
    {icon}
    {/* Hide text when sidebar is collapsed */}
    {!isCollapsed && <span className="text-sm">{text}</span>}
  </div>
);

export default Sidebar;
