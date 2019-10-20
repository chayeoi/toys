import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, size } from 'lodash/fp';

const S = {
  Wrapper: styled.div``,
  Heading: styled.h3``,
  OrderedList: styled.ol``,
  ListItem: styled.li``,
};

const Repos = ({ repos }) => (
  <S.Wrapper>
    <S.Heading>
      {`${size(repos)} Repositories`}
    </S.Heading>
    <S.OrderedList>
      {map((repo) => (
        <S.ListItem key={repo.id}>
          {repo.full_name}
          {repo.stargazers_count}
        </S.ListItem>
      ), repos)}
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
