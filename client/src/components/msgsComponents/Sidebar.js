import React from "react";
import DiscutionCard from "./DiscutionCard";

const Sidebar = ({ data, onClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header ">
        <h5>Messages</h5>
      </div>
      <div className="sidebar-disc">
        {data?.map((cnv, i) => (
          <DiscutionCard key={i} onClick={onClick} cnv={cnv} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
