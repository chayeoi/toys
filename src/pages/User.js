import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from '../hooks';
import * as services from '../services';

const User = () => {
  const user = useSelector((state) => state.user);
  const repos = useSelector((state) => state.repos);

  const dispatch = useDispatch();

  const params = useParams();

  console.log('repos:', repos);

  useEffect(() => {
    const fetchReposByUser = async () => {
      const response = await services.fetchReposByUser({
        user: params.user,
        direction: 'desc',
      });

      dispatch({ type: 'FETCH_REPOS_BY_USER_SUCCESS', payload: { repos: response.data } });
    };

    fetchReposByUser();
  }, [dispatch, params.user]);

  useEffect(() => () => dispatch({ type: 'INIT_USER' }), [dispatch]);

  return (
    <div>
      <div>
        {user && user.login}
      </div>
    </div>
  );
};

export default User;
