import React from "react";
import { Avatar } from "@material-ui/core";

const DiscutionCard = ({ onClick, cnv }) => {
  const { image, name, msg, date } = cnv;
  return (
    <div onClick={() => onClick(cnv)} className="disc-card">
      <Avatar src={image} />
      <div className="disc-info">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
      <p>{date}</p>
    </div>
  );
};

export default DiscutionCard;
