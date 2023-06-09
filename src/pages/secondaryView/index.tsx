import {useState} from "react";
import {useQuery} from "react-query";
import {DataAPI} from "../../api";
import {ChartBoxPlot} from "../../components/BoxPlot";
import {Loader} from "../../components/loader";
import {StyledInputDate} from "../../components/StyledInputs/StyledDate";
import "./SecondaryView.css";
import "./../Shared.css";
import {Button} from "../../components/button";
import {LineChartPlot} from "../../components/LineChartPlot";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function SecondaryView() {
	//data
	const [data, setData] = useState<any>([]);
	//dates
	const [initialDate, setInitialDate] = useState<string>("21 Oct 2020");
	const [inputInitialDate, setInputInitialDate] = useState<string>("");
	//
	const [endDate, setEndDate] = useState<string>("28 Oct 2022");
	const [inputEndDate, setInputEndDate] = useState<string>("");
	//refetch
	const [refresh, setRefresh] = useState<boolean>(false);

	const {
		isLoading,
		data: leads,
		isError,
		error,
	} = useQuery({
		queryKey: [`data-lineChart`, [refresh]],
		queryFn: () => DataAPI.getLineChart(initialDate, endDate),
		onSuccess: (data: any) => {
			console.log("secondary:", data);
			setData(data);
		},
		// staleTime: 15 * (60 * 1000), // 15 mins
		// cacheTime: 20 * (60 * 1000), // 20 mins
	});

	if (isLoading) {
		return (
			<div className="loader-container">
				<Loader />
			</div>
		);
	}

	return (
		<div className="App">
			<div>
				<h1 className="text-center">Flow Duration Curve</h1>

				<div className="filters">
					<div className="inputs">
						<div className="date-picker">
							<label htmlFor="">Initial Date:</label>
							<StyledInputDate
								$customType="secondary"
								value={inputInitialDate}
								onChange={(e: any) => {
									setInputInitialDate(e.target.value);
									//TODO: bug con el uso horario, toma un día antes
									// console.log("obj: ", e.target.value);
									let date: Date = new Date(e.target.value);
									// console.log("date: ", date);
									let tempDate: string = `${date.getDate()} ${
										monthNames[date.getMonth()]
									} ${date.getFullYear()}`;
									// console.log("tempDate:", tempDate);

									setInitialDate(tempDate);
								}}
							/>
						</div>
						<div className="date-picker">
							<label htmlFor="">End Date:</label>
							<StyledInputDate
								$customType="secondary"
								value={inputEndDate}
								onChange={(e: any) => {
									setInputEndDate(e.target.value);
									// console.log("obj: ", e.target.value);
									let date: Date = new Date(e.target.value);
									// console.log("date: ", date);
									let tempDate: string = `${date.getDate()} ${
										monthNames[date.getMonth()]
									} ${date.getFullYear()}`;
									// console.log("tempDate:", tempDate);

									setEndDate(tempDate);
								}}
							/>
						</div>
					</div>
					<Button
						func={() => {
							// console.log(initialDate, endDate);
							setRefresh(!refresh);
						}}
						text="update"
						full={false}
					/>
				</div>

				{data.map((chartData: any, index: number) => {
					let newData: any = [];
					chartData.values.map((element: any) => {
						// console.log(element);
						newData.push({
							name: element.year,
							data: element.discharges,
						});
					});
					return (
						<div key={index}>
							<h2>{chartData.siteName}</h2>
							<LineChartPlot data={newData} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SecondaryView;
