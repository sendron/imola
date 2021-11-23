import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';
import * as laptimesQueryConfigs from './query-configs/laptimes';
import * as laptimesSelectors from './selectors/laptimes';
import heading from './TrackdayImola.png';
import Item from './components/Item';

const App = () => {

  const validClasses = ['GTE','GT1','GT3','GT4'];
  const laptimes = useSelector(laptimesSelectors.getLaptimes);
  const [sortedLaptimes,setSortedLaptimes] = React.useState(false);
  const [selectedClass,setSelectedClass] = React.useState(validClasses[0]);

  useRequest(laptimesQueryConfigs.laptimesRequest(selectedClass)); // <- defaulting to GTE class

  React.useEffect(()=>{
    if(laptimes){
      if(laptimes.length){
        if(laptimes.length > 1)
          setSortedLaptimes(laptimes.sort((a,b) => b.attributes.LapTime-a.attributes.LapTime).reverse())
        else 
          setSortedLaptimes(laptimes);
      }
        
      else 
        setSortedLaptimes([]);
    }
  },[laptimes]);

  const renderRest = (laps) => {
    let r = [];
    for (let i = 3; i <= laps.length; i++) {
      r.push(<Item c="item" lap={sortedLaptimes[i]} pos={i} key={`laptime-${i}`}/>);
    }
    return r;
  }

  // console.log(selectedClass);

  if(selectedClass && sortedLaptimes)
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container-fluid text-center">
                <img src={heading} alt="Trackday@Imola" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center body mt-3">
                <h1>TROLL SimRacing presents Trackday@Imola! [BETA]</h1>  
                <p>
                  GT - real weather. Dont be a dick, show respect!<br/>
                  <a href="https://discord.com/invite/G5a5MJp5Zn">Discord.gg/G5a5MJp5Zn</a> | Have a great trackday!!
                </p>
              </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
              <select className="custom-select custom-select-lg mt-3" 
                value={selectedClass}
                onChange={(e)=>{
                  if(validClasses.indexOf(e.target.value)!==-1)
                    setSelectedClass(e.target.value);
                }}>
                <option>Select class</option>
                {validClasses.map((c,i)=>
                  <option value={c} key={`select-option-${i}`}>{c}</option>
                )}
              </select>  
            </div>
          </div>
        </div>
        {sortedLaptimes.length && 
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
              <div className="center">
                  <div className="top3">
                    <Item c="two item" lap={sortedLaptimes[1]} pos={2}/>
                    <Item c="one item" lap={sortedLaptimes[0]} pos={1}/>
                    <Item c="three item" lap={sortedLaptimes[2]} pos={3}/>
                  </div>
                  <div className="list">
                    {renderRest(sortedLaptimes)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
  return <p>Loading data</p>;
}
export default App;