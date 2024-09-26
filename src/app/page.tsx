"use client";

import Navbar from "./components/navbar";
import Sidebar from "./components/asideBar";
import FeedContainer from "./components/feedContainer";
import FilterButtons from "./components/filterButtons";

export default function Home() {
  return (
    <div className="bg-[#0E1217] h-screen overflow-hidden">
      {/* Navbar at the top */}
      <Navbar />

      {/* Flexbox to align Sidebar and FeedContainer */}
      <div className="flex h-full">
        {/* Sidebar on the left, scrollable independently */}
        <aside className=" h-full overflow-y-scroll sticky top-0 no-scrollbar">
          <Sidebar />
        </aside>

        {/* FeedContainer to the right of Sidebar, scrollable independently */}
        <main className="w-[75%] p-4 h-full overflow-y-scroll no-scrollbar">
          <FilterButtons />
          <FeedContainer />
        </main>
      </div>
    </div>
  );
}
