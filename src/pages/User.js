import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Repos, UserInfo } from '../components';
import { useDispatch, useSelector } from '../hooks';
import * as services from '../services';

const User = () => {
  const user = useSelector((state) => state.user);
  const repos = useSelector((state) => state.repos);

  const dispatch = useDispatch();

  const params = useParams();

  console.log('user:', user);
  console.log('repos:', repos);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        dispatch({ type: 'FETCH_USER_REQUEST' });

        const responses = await Promise.all([
          services.fetchUser({ user: params.user }),
          services.fetchReposByUser({ user: params.user, direction: 'desc' }),
        ]);

        // TODO: 데이터 normalize 추후 진행 예정
        dispatch({
          type: 'FETCH_USER_SUCCESS',
          payload: { user: responses[0].data, repos: responses[1].data },
        });
      };

      fetchUser();
    } catch (error) {
      dispatch({
        type: 'FETCH_USER_FAILURE',
        payload: { error },
      });
    }
  }, [dispatch, params.user]);

  return (
    <div>
      {user && <UserInfo user={user} />}
      {repos && <Repos repos={repos} />}
    </div>
  );
};

export default User;
