import React from 'react';
import { Home, Plus, Users, Flame, MessageSquare, Hash, Globe, Award, Link, Bookmark, Clock } from 'lucide-react';

// Sidebar data configuration
const sidebarData = [
  {
    section: '',
    items: [
      { icon: <Home size={18} />, text: 'myFeed' },
      { icon: <Plus size={18} />, text: 'Custom feed' },
    ],
  },
  {
    section: 'Squads',
    items: [
      { icon: <Users size={18} />, text: 'Public Squads' },
      { icon: <img src="/api/placeholder/24/24" alt="controversy.dev" className="w-5 h-5 rounded" />, text: 'controversy.dev' },
      { icon: <img src="/api/placeholder/24/24" alt="daily.dev changelog" className="w-5 h-5 rounded" />, text: 'daily.dev changelog' },
      { icon: <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs">N</div>, text: 'NexUS' },
      { icon: <Plus size={18} />, text: 'New Squad' },
    ],
  },
  {
    section: 'Discover',
    items: [
      { icon: <Flame size={18} />, text: 'Explore' },
      { icon: <MessageSquare size={18} />, text: 'Discussions' },
      { icon: <Hash size={18} />, text: 'Tags' },
      { icon: <Globe size={18} />, text: 'Sources' },
      { icon: <Award size={18} />, text: 'Leaderboard' },
    ],
  },
  {
    section: 'Activity',
    items: [
      { icon: <Link size={18} />, text: 'Submit a link' },
      { icon: <Bookmark size={18} />, text: 'Bookmarks' },
      { icon: <Clock size={18} />, text: 'History' },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-[#444343] text-gray-300 p-4">
      {sidebarData.map((section, idx) => (
        <div className="mb-6" key={idx}>
          <h3 className="text-xs uppercase font-semibold mb-2">{section.section}</h3>
          <div className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <SidebarItem key={itemIdx} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

const SidebarItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

export default Sidebar;
