"use client";

import Navbar from "./components/navbar";
import Sidebar from "./components/asideBar";
import FeedContainer from "./components/feedContainer";
import FilterButtons from "./components/filterButtons";

export default function Home() {
  return (
    <div className="bg-[#0E1217] min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Flexbox to align Sidebar and FeedContainer */}
      <div className="flex">
        {/* Sidebar on the left */}
        <aside className="">
          <Sidebar />
        </aside>

        {/* FeedContainer to the right of Sidebar */}
        <main className="w-4/5 p-4">
        <FilterButtons/>
          <FeedContainer />
        </main>
      </div>
    </div>
  );
}
