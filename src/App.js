import React from 'react';

import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import * as laptimesQueryConfigs from './query-configs/laptimes';
import * as laptimesSelectors from './selectors/laptimes';

const App = () => {

  const vehicles = useSelector(laptimesSelectors.getVehicles);
  const laptimes = useSelector(laptimesSelectors.getLaptimes);

  useRequest(laptimesQueryConfigs.vehiclesRequest());
  useRequest(laptimesQueryConfigs.laptimesRequest());

  console.log(vehicles,laptimes);

  if(vehicles && laptimes)
    return (
      <p>Hei</p>
    )

  return <p>Loading data</p>;
}
export default App;