import React from "react";

import Tab from "../../components/Tab";

export default function Tabs({ editMode, activeTab, setActiveTab }) {
  const handleClick = (index) => {
    editMode ? alert("please save your changes first") : setActiveTab(index);
  };

  return (
    <div className="d-flex mt-4 mx-md-4">
      <Tab
        label="Basic Info"
        onClick={() => handleClick(0)}
        isActive={activeTab === 0}
      />
      <Tab
        label="Education"
        onClick={() => handleClick(1)}
        isActive={activeTab === 1}
      />
    </div>
  );
}
