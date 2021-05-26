import React, { useState, useEffect } from 'react';
import DiscutionCard from './DiscutionCard';
import axios from 'axios';
import utils from '../../utils/socket';

const Sidebar = ({ onClick }) => {
  const [conv, setConv] = useState([]);
  useEffect(() => {
    const getConv = async () => {
      const { data } = await axios.get(`/conversations/${utils?.user}`);

      setConv(data);
    };
    getConv();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar-header '>
        <h5>Messages</h5>
      </div>
      <div className='sidebar-disc'>
        {conv?.map((cnv) => (
          <DiscutionCard key={cnv._id} onClick={onClick} cnv={cnv} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
