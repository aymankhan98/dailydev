import React from "react";
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Bookmark,
  Link,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avtar";
import Image from "next/image";
import feedDataArray from "../dummyData/feedData";

type FeedData = {
  title: string;
  tags: string[];
  readTime: string;
  image: string;
};

const FeedCard = ({ feedData }: { feedData: FeedData }) => {
  const { title, tags, readTime, image } = feedData;

  return (
    <div className="bg-[#1C1F26] border border-[#444343] rounded-xl overflow-hidden w-80 cursor-pointer">
      <div className="p-4">
        <div className="flex flex-col mb-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
        </div>
        <div className="flex flex-wrap mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs border border-[#444343] text-gray-300 rounded-full px-2 py-1 mr-1 mb-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">{readTime}</p>
        <Image
          src={image}
          alt={title}
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex justify-between text-gray-400">
          <ArrowUp className="w-5 h-5" />
          <ArrowDown className="w-5 h-5" />
          <MessageSquare className="w-5 h-5" />
          <Bookmark className="w-5 h-5" />
          <Link className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

const FeedContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 bg-[#0E1217] p-8">
      {feedDataArray.map((feedData, index) => (
        <FeedCard key={index} feedData={feedData} />
      ))}
    </div>
  );
};

export default FeedContainer;
