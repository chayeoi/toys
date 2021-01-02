import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  compose, map, orderBy, size,
} from 'lodash/fp';

import { star } from '../assets';

const S = {
  Wrapper: styled.div``,
  Heading: styled.h3`
    margin-bottom: 1.25rem;
    border-bottom: 1px solid #DDD;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
  `,
  OrderedList: styled.ol`
    color: rgb(85, 85, 85);
  `,
  ListItem: styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    padding: 12px 16px;
    border: 1px solid #DDD;
  `,
  RepositoryName: styled.a`
    font-weight: 300;
    :hover {
      color: #66AFE9;
      text-decoration: underline;
    }
  `,
  StargazersCount: styled.data`
    display: flex;
    align-items: center;
    min-width: 48px;
    ::before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 4px;
      background: url(${star}) no-repeat;
    }
  `,
};

const Repos = ({ repos }) => (
  <S.Wrapper>
    <S.Heading>
      {`${size(repos)} Repositories`}
    </S.Heading>
    <S.OrderedList>
      {compose(
        map((repo) => (
          <S.ListItem key={repo.id}>
            <S.RepositoryName href={repo.html_url} target="_blank">
              {repo.full_name}
            </S.RepositoryName>
            <S.StargazersCount>
              {repo.stargazers_count}
            </S.StargazersCount>
          </S.ListItem>
        )),
        orderBy(['stargazers_count'], ['desc']),
      )(repos)}
    </S.OrderedList>
  </S.Wrapper>
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
  })).isRequired,
};

export default Repos;
