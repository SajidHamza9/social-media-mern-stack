import React, { useState, useRef } from 'react';
import { SearchContainer, SearchInput, Card } from './style';
import SearchIcon from '@material-ui/icons/Search';
import SearchCard from '../SearchCard';

const Search = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          onFocus={handleToggle}
          ref={anchorRef}
          type='text'
          placeholder='Search...'
        />
      </SearchContainer>
      <SearchCard
        open={open}
        anchorEl={anchorRef.current}
        close={handleClose}
      />
    </>
  );
};

export default Search;
