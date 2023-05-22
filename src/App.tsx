import {useState} from "react";
import {useQuery} from "react-query";
import {ChartBoxPlot} from "./ChartExample";
import {Loader} from "./loader";
import {DataAPI} from "./api";

function App() {
	const [boxPlotData, setBoxPlotData] = useState<any>([
		{
			x: "January",
			y: [54, 66, 69, 75, 88],
		},
		{
			x: "February",
			y: [43, 65, 69, 76, 81],
		},
		{
			x: "March",
			y: [31, 39, 45, 51, 59],
		},
		{
			x: "April",
			y: [39, 46, 55, 65, 71],
		},
		{
			x: "May",
			y: [29, 31, 35, 39, 44],
		},
		{
			x: "Junne",
			y: [41, 49, 58, 61, 67],
		},
		{
			x: "July",
			y: [54, 59, 66, 71, 88],
		},
		{
			x: "August",
			y: [54, 59, 66, 71, 88],
		},
		{
			x: "September",
			y: [54, 59, 66, 71, 88],
		},
		{
			x: "October",
			y: [54, 59, 66, 71, 88],
		},
		{
			x: "November",
			y: [54, 59, 66, 71, 88],
		},
		{
			x: "December",
			y: [54, 59, 66, 71, 88],
		},
	]);

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
			let newData: any = [];
			data[0].values.map((element: any) => {
				console.log(element);
				newData.push({
					x: element.month,
					y: element.discharges,
				});
			});

			setBoxPlotData(newData);
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
				<ChartBoxPlot data={boxPlotData} />
			</div>
		</div>
	);
}

export default App;
