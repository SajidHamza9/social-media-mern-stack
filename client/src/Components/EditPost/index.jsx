import React, { useState, useRef, useEffect } from 'react';
import { Input, Actions, Button, Container } from './style';

const EditPost = ({ text, close, type }) => {
  const [value, setValue] = useState(text);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Container type={type}>
      <Input
        type='text'
        inputRef={inputRef}
        value={value}
        multiline
        onChange={(e) => setValue(e.target.value)}
      />
      <Actions>
        <Button contained>Confirm</Button>
        <Button onClick={close}>Cancel</Button>
      </Actions>
    </Container>
  );
};

export default EditPost;
