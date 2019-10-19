import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { DispatchContext, GlobalContext } from '../contexts';
import { reducer } from '../store';

const GlobalProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>
        {children}
      </GlobalContext.Provider>
    </DispatchContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
