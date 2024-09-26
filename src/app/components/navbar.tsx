import React from 'react';
import { Search, Bell } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avtar";

// Configuration object
const navbarConfig = {
  logo: {
    src: '/devlogo.png',
    alt: 'Daily.dev logo',
    width: 130,
    height: 35,
  },
  search: {
    placeholder: 'Search',
    shortcut: 'Ctrl + K',
  },
  button: {
    text: 'New post',
  },
  notifications: {
    primary: 34,
    secondary: 10,
  },
  avatar: {
    src: 'https://github.com/shadcn.png',
    fallback: 'CN',
  },
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-[#444343] text-white px-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={navbarConfig.logo.src}
          width={navbarConfig.logo.width}
          height={navbarConfig.logo.height}
          alt={navbarConfig.logo.alt}
        />
      </div>

      {/* Centered Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
        <input
  type="text"
  placeholder={navbarConfig.search.placeholder}
  className="w-64 bg-gray-800 rounded-md py-2 px-3 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
            {navbarConfig.search.shortcut}
          </span>
        </div>
      </div>

      {/* New Post Button, Notifications, Avatar */}
      <div className="flex items-center space-x-4">
        <button className="bg-white hover:bg-[#c7c5c5] text-black px-3 py-1 rounded-md text-sm font-medium">
          {navbarConfig.button.text}
        </button>
        <div className="flex items-center space-x-2">
          <div className="bg-[#1C1F26] p-2 rounded-md">
            <Bell className="w-7 h-6" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {navbarConfig.notifications.primary}
            </span>
            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {navbarConfig.notifications.secondary}
            </span>
          </div>
          <Avatar>
            <AvatarImage src={navbarConfig.avatar.src} />
            <AvatarFallback>{navbarConfig.avatar.fallback}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
