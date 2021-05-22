import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import utils from "../../utils/socket";
import moment from "moment";
import axios from "axios";

const DiscutionCard = ({ onClick, cnv }) => {
  const { members, _id, updatedAt } = cnv;
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const otherUserId = members.find((member) => member !== utils?.user);
      const { data } = await axios(`/api/users/${otherUserId}`);
      console.log("get one sidebar's user");
      setUser(data);
    };
    getUser();
  }, [members]);

  return (
    <div onClick={() => onClick(user, _id)} className="disc-card">
      {/* user.status  */}
      <Avatar src={user.pdp} />
      <div className="disc-info">
        <h2>{user.username}</h2>
        {/* <p>{cnv.updatedAt}</p> */}
      </div>

      <p>{moment(updatedAt).fromNow(true)}</p>
    </div>
  );
};

export default DiscutionCard;
