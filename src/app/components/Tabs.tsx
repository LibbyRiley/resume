import React, { useState, ReactNode } from "react";
interface TabProps {
  label: string;
  content: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, content }) => (
  <div>
    <h2 className="text-4xl opacity-70 font-light italic mt-12 lg:hidden">
      {label}
    </h2>
    {content}
  </div>
);
interface TabsProps {
  tabs: { id: string; label: string; content: ReactNode }[];
}
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex space-x-4 mt-8 lg:mt-0 hidden lg:flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "bg-green-900 text-white border-green-700"
            } text-sm font-mono flex w-full justify-center pb-6 pt-8 lg:w-auto lg:rounded-xl lg:border lg:bg-green lg:p-4 transition-colors hover:border-green-600 hover:bg-green-600`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`block ${
              activeTab === tab.id ? "lg:block" : "lg:hidden"
            }`}
          >
            <Tab label={tab.label} content={tab.content} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
