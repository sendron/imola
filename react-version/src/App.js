import React from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';
import * as laptimesQueryConfigs from './query-configs/laptimes';
import * as laptimesSelectors from './selectors/laptimes';
import heading from './TrackdayImola.png';
import Item from './components/Item';
import Select from 'react-select'
import NavBar from './components/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {

	const validClasses = ['GTE', 'GT1', 'GT3', 'GT4'];
	const laptimes = useSelector(laptimesSelectors.getLaptimes);
	const [sackTimes, setSackTimes] = React.useState([]);
	const [selectedClass, setSelectedClass] = React.useState(validClasses[0]);
	const [page, setPage] = React.useState(0);
	const [hasMore, setHasMore] = React.useState(true);

	const options = [
		{ value: 'GTE', label: 'GTE' },
		{ value: 'GT1', label: 'GT1' },
		{ value: 'GT3', label: 'GT3' },
		{ value: 'GT4', label: 'GT4' }
	]

	useRequest(laptimesQueryConfigs.laptimesRequest(selectedClass, page)); // <- defaulting to GTE class

	React.useEffect(() => {
		setHasMore(true);
		setSackTimes([]);
	}, [selectedClass])

	React.useEffect(() => {
		if (laptimes) {
			if (laptimes.length) {
				setSackTimes(sackTimes.concat(laptimes));
			}
			else if (page > 0) {
				// Do nothing to the sack
				setHasMore(false);
			}
			else
				setSackTimes([]);
		}
		// eslint-disable-next-line
	}, [laptimes]);

	const renderRest = (laps) => {
		let r = [];
		for (let i = 3; i <= laps.length; i++) {
			if (laps[i])
				r.push(<Item c="item" lap={laps[i]} pos={i} key={`laptime-${laps[i].steamId}-${selectedClass}-${i}`} />);
		}
		return r;
	}

	const fetchData = () => {
		setPage(page + 1);
	}

	if (selectedClass && sackTimes)
		return (
			<React.Fragment>
				<NavBar />
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="container-fluid text-center">
								<img src={heading} alt="Trackday@Imola" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 body mt-2">
							<div className="blackbox">
								<div className='text-center'>
									<h1>TROLL SimRacing presents Trackday@Imola! [BETA]</h1>
									<p>
										GT cars - real time (CET) and weather. Dont be a dick, show respect!<br />
										<a href="https://discord.com/invite/G5a5MJp5Zn">Discord.gg/G5a5MJp5Zn</a> | Have a great trackday!!<br />
									</p>
								</div>
								<div className="container-fluid">
									<div className="row">
										<div className="col">

											<Select
												options={options}
												className="mb-5 pl-5 pr-5 mt-2"
												defaultValue={options[0]}
												onChange={(e) => {
													setPage(0);
													setHasMore(true);
													setSelectedClass(e.value);
												}}
											/>
											{!!sackTimes.length &&

												<div className="">
													<div className="top3">
														<Item c="two item" lap={sackTimes[1]} pos={2} />
														<Item c="one item" lap={sackTimes[0]} pos={1} />
														<Item c="three item" lap={sackTimes[2]} pos={3} />
													</div>
													<InfiniteScroll
														dataLength={sackTimes.length} //This is important field to render the next data
														next={fetchData}
														hasMore={hasMore}
														loader={
															<p style={{ textAlign: 'center' }}>
																<b>Loading more laptimes</b>
															</p>
														}
														className='list'
														style={{
															overflow: 'unset'
														}}
														endMessage={
															<p style={{ textAlign: 'center' }}>
																<b>Yay! You have seen it all</b>
															</p>
														}
													>
														{renderRest(sackTimes)}
													</InfiniteScroll>
												</div>
											}
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	return <p>Loading data</p>;
}
export default App;