import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Bookmark, Link } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avtar";

// Moved data directly into each card
const feedDataArray = [
  {
    title: "Meta's Ray-Bans will now 'remember' things for you",
    tags: ['#tech-news', '#ai', '#wearable'],
    readTime: 'Today • 3m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
 
  },
  {
    title: "Tesla's Cybertruck enters production phase",
    tags: ['#tech-news', '#electric-vehicles', '#tesla'],
    readTime: 'Yesterday • 5m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
   
  },
  {
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },
  {
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },{
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },{
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },{
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },{
    title: "New AI breakthrough promises faster medical diagnosis",
    tags: ['#ai', '#healthcare', '#tech-news'],
    readTime: '2 days ago • 4m read time',
    image: '/usgs-ls50RS4hgjk-unsplash.jpg',
  
  },
 
];

const FeedCard = ({ feedData }:any) => (
  <div className="bg-[#1C1F26] border cursor-pointer border-[#444343] rounded-xl overflow-hidden w-80">
    {!feedData.isPromo && (
      <div className="p-4">
        <div className="flex flex-col mb-2">
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-white font-semibold text-lg">{feedData.title}</h2>
        </div>
        <div className="flex flex-wrap mb-2">
          {feedData.tags.map((tag, index) => (
            <span key={index} className="text-xs border border-[#444343] text-gray-300 rounded-full px-2 py-1 mr-1 mb-1">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">{feedData.readTime}</p>
        <img src={feedData.image} alt={feedData.title} className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="flex justify-between text-gray-400">
          <ArrowUp className="w-5 h-5" />
          <ArrowUp className="w-5 h-5" />
          <ArrowDown className="w-5 h-5" />
          <MessageSquare className="w-5 h-5" />
          <Bookmark className="w-5 h-5" />
          <Link className="w-5 h-5" />
        </div>
      </div>
    )}
    {feedData.isPromo && (
      <div className="p-4">
        <h2 className="text-white font-semibold text-lg mb-2">{feedData.title}</h2>
        <img src={feedData.image} alt="Subscription promo" className="w-full h-40 object-cover rounded-md mb-4" />
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-full w-full">
          Subscribe
        </button>
        <p className="text-gray-400 text-sm mt-2 text-center">Promoted</p>
      </div>
    )}
  </div>
);

const FeedContainer = () => (
  <div className="grid grid-cols-1 grid-cols-ga sm:grid-cols-2 lg:grid-cols-3 gap-9 bg-[#0E1217] p-8">
    {feedDataArray.map((feedData, index) => (
      <FeedCard key={index} feedData={feedData} />
    ))}
  </div>
);

export default FeedContainer;
