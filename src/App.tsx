import {useState} from "react";
import {useQuery} from "react-query";
import {ChartBoxPlot} from "./ChartExample";
import {Loader} from "./loader";
import {DataAPI} from "./api";

function App() {
	const {
		isLoading,
		data: leads,
		isError,
		error,
	} = useQuery({
		queryKey: [`data-boxPlot`, []],
		queryFn: () => DataAPI.getBoxPlot("21 Oct 2020", "28 Oct 2020"),
		onSuccess: (data: any) => {
			console.log(data);
		},
		staleTime: 15 * (60 * 1000), // 15 mins
		cacheTime: 20 * (60 * 1000), // 20 mins
	});

	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<div>
				<h2>Water Report</h2>
				<label htmlFor="">Initial Date</label>
				<input type="date" />
				<br />
				<label htmlFor="">End Date</label>
				<input type="date" />
				<ChartBoxPlot />
			</div>
		</div>
	);
}

export default App;
