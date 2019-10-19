import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from './Input';
import Jumbotron from './Jumbotron';

const S = {
  Heading: styled.h2``,
  Paragraph: styled.p``,
  Form: styled.form``,
};

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(value);
  };

  return (
    <Jumbotron as="section">
      <S.Heading>Gitstar Ranking</S.Heading>
      <S.Paragraph>
        Unofficial GitHub star ranking for users, organizations and repositories.
      </S.Paragraph>
      <S.Form onSubmit={handleSubmit}>
        <Input type="search" value={value} onChange={handleChange} />
        <button type="submit">Search</button>
      </S.Form>
    </Jumbotron>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
