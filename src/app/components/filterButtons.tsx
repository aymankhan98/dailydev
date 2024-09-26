import React from "react";
import { Settings, Plus } from "lucide-react";
import Filterarrows from "../../../public/Filterarrows";

const FilterButtons = () => {
  const buttonsData = [
    {
      label: "Feed settings",
      icon: Settings,
      onClick: () => console.log("Feed settings clicked"),
    },
    {
      label: "Shortcuts",
      icon: Plus,
      onClick: () => console.log("Shortcuts clicked"),
    },
    {
      label: "Filter",
      icon: Filterarrows,
      onClick: () => console.log("Filter clicked"),
    },
  ];

  return (
    <div className="flex space-x-4 px-8">
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          onClick={button.onClick}
        >
          {button.icon && <button.icon className="w-5 h-5" />}
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
