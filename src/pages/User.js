import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { get } from 'lodash/fp';

import {
  ErrorMessage, Loader, Repos, UserInfo,
} from '../components';
import { useDispatch, useSelector } from '../hooks';
import * as services from '../services';

const S = {
  UserInfo: styled(UserInfo)`
    margin-bottom: 64px;
  `,
};

const User = () => {
  const user = useSelector((state) => state.user);
  const repos = useSelector((state) => state.repos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
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
      } catch (e) {
        dispatch({
          type: 'FETCH_USER_FAILURE',
          payload: { error: e },
        });
      }
    };

    fetchUser();
  }, [dispatch, params.user]);

  useEffect(() => () => dispatch({ type: 'INIT_ERROR' }), [dispatch]);

  if (get('response', error)) {
    return (
      <ErrorMessage>
        {error.response.data.message}
      </ErrorMessage>
    );
  }

  return (
    <>
      <div>
        {user && <S.UserInfo user={user} repos={repos} />}
        {repos && <Repos repos={repos} />}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default User;
