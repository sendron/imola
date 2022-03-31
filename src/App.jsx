import { onMount, createSignal, createEffect, Show, For  } from 'solid-js';
import heading from './TrackdayImola.png';
import Item from './components/Item';

const laptimesRequest = async (c, page) =>
  (await fetch(`https://api.trollsimracing.no:8080/class/${c}/${page}`)).json();


const App = () => {

	const validClasses = ['GTE', 'GT1', 'GT3', 'GT4'];
	const [laptimes,setLaptimes] = createSignal([]);
	const [sackTimes, setSackTimes] = createSignal([]);
	const [selectedClass, setSelectedClass] = createSignal(validClasses[0]);
	const [page, setPage] = createSignal(0);
	const [hasMore, setHasMore] = createSignal(true);
	const [isLoading, setIsLoading] = createSignal(false);
	// const [laptimes, { mutate, refetch }] = createResource(sourceSignal, fetchData)

	const options = [
		{ value: 'GTE', label: 'GTE' },
		{ value: 'GT1', label: 'GT1' },
		{ value: 'GT3', label: 'GT3' },
		{ value: 'GT4', label: 'GT4' }
	]
	
	onMount(() => {
		laptimesRequest(selectedClass(),0).then((res)=>
			setSackTimes(res)
		)
	})
	
	window.onscroll = function(ev) {
		let  el = document.body;
		let { y, height } = el.getBoundingClientRect();
		if(Math.ceil(-y + height) >= el.scrollHeight){
			if(!isLoading() && hasMore()){
				setIsLoading(true);
				laptimesRequest(selectedClass(),page() + 1).then((res)=>{
					if(res.length)
						setSackTimes(sackTimes().concat(res));	
					else
						setHasMore(false);
					setIsLoading(false);
				})
				setPage(page() + 1);
			}
		}
	};

	return (
		<>
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="container-fluid text-center">
							<img src={heading} alt="Trackday@Imola" class="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 body mt-2">
						<div class="blackbox">
							<div className='text-center'>
								<h1>TROLL SimRacing presents Trackday@Imola! [BETA]</h1>
								<p>
									GT cars - real time (CET) and weather. Dont be a dick, show respect!<br />
									<a href="https://discord.com/invite/G5a5MJp5Zn">Discord.gg/G5a5MJp5Zn</a> | Have a great trackday!!<br />
								</p>
							</div>
							<div class="container-fluid">
								<div class="row">
									<div class="col">
										<div class="form-group mb-5 pl-5 pr-5 mt-2">
											<label for="classSelector">Select class</label>
											<select 
												class="form-control" 
												id="classSelector"
												onChange={(e) => {
													setSelectedClass(validClasses[e.currentTarget.selectedIndex]);
													setSackTimes([]);
													laptimesRequest(selectedClass(),0).then((res)=>{
														setSackTimes(res);
														setPage(0);
														setHasMore(true);
													})
												}}
											>
												<For each={options}>
													{(option)=>
														<option>{option.label}</option>
													}
												</For>
											</select>
										</div>
										<Show 
											when={!!sackTimes().length} 
											fallback={<div>Loading...</div>}
										>
											<div class="" id="scoreboard">
												<div class="top3">
													<Item c="two item" lap={sackTimes()[1]} pos={2} />
													<Item c="one item" lap={sackTimes()[0]} pos={1} />
													<Item c="three item" lap={sackTimes()[2]} pos={3} />
												</div>
												<div class="list" id="infScroll">
													<For
														each={sackTimes().slice(3)}
													>
														{(el,i)=>
															<Item c="item" lap={el} pos={i()+3}/>
														}
													</For>
													<Show when={!hasMore()}>
														<p class="text-center">
															<b>Yay! You have seen it all</b>
														</p>
													</Show>
												</div>
											</div>
										</Show>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App;