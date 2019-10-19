import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchForm } from '../components';
import { useDispatch, useSelector } from '../hooks';
import * as services from '../services';

const Home = () => {
  const history = useHistory();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      history.push(`/${user.login}`);
    }
  }, [history, user]);

  const fetchUser = async (name) => {
    const response = await services.fetchUser({ user: name });

    dispatch({ type: 'FETCH_USER_SUCCESS', payload: { user: response.data } });
  };

  return (
    <main>
      <SearchForm onSubmit={fetchUser} />
    </main>
  );
};

export default Home;
