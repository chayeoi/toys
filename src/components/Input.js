import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input``;

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
