import React, { useEffect } from 'react';
import { Card, Header, Title, Body } from './style';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import utils from '../../utils/socket';
import { getloggedIn } from '../../redux/actions/LoginActions';

const Contacts = () => {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(getloggedIn());
  }, [dispatch]);
  return (
    <Card>
      <Header>
        <Title>Contacts</Title>
      </Header>
      <Body>
        {error ? (
          <h3>error</h3>
        ) : (
          users.map(
            (c) => c._id !== utils?.user && <ContactItem key={c._id} {...c} />,
          )
        )}
      </Body>
    </Card>
  );
};

export default Contacts;
