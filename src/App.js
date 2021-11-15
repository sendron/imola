import React from 'react';

import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import * as laptimesQueryConfigs from './query-configs/laptimes';
import * as laptimesSelectors from './selectors/laptimes';

const App = () => {

  const vehicles = useSelector(laptimesSelectors.getVehicles);

  useRequest(laptimesQueryConfigs.vehiclesRequest());

  return (
    <p>Hei</p>
  )
}
export default App;