"use client";
import React, { useEffect, useState } from "react";
import FeedCard from "../common/feedCard";
import { FeedItem } from "@/app/interfaces/feedInterface";
import FilterButtons from "../common/fiterButton";

// Define the type for the backend data
interface BackendFeedItem {
  _id: string;
  title: string;
  hashtags: string[];
  readTime: number;
  image?: string;
  // Add any other fields if necessary
}

function Feed() {
  const [feedData, setFeedData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feed");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BackendFeedItem[] = await response.json();
        console.log("Data fetched from backend:", data);

        const formattedData: FeedItem[] = data.map((item) => ({
          _id: item._id,
          title: item.title,
          hashtags: item.hashtags,
          readTime: item.readTime,
          image: item.image || "/default.jpg",
        }));

        setFeedData(formattedData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
          setError(error.message);
        } else {
          console.error("Unexpected error:", error);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="lg:p-11 col-span-5 lg:flex lg:flex-col flex flex-col p-4 h-full overflow-y-auto no-scrollbar">
      <FilterButtons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 bg-[#0E1217] lg:p-8">
        {feedData.map((data) => (
          <FeedCard
            key={data._id} // Use MongoDB _id as the unique key
            title={data.title}
            hashtags={data.hashtags} // Pass hashtags as an array
            readTime={data.readTime}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
