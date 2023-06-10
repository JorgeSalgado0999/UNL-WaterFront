import {useState} from "react";
import {useQuery} from "react-query";
import {DataAPI} from "../../api";
import {ChartBoxPlot} from "../../components/BoxPlot";
import {Loader} from "../../components/loader";
import {StyledInputDate} from "../../components/StyledInputs/StyledDate";
import "./MainView.css";
import "./../Shared.css";
import {Button} from "../../components/button";
import { StyledTextArea } from "../../components/StyledTextArea";
import { defaultSites } from "../../api/APIData";

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

const monthNamesShort = [
	"Jan",
	"Feb",
	"Mar",
	"April",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

function formatDate(date: any, first?: any) {
	const day = String(date.getDate());
	const month = String(date.getMonth());
	const year = date.getFullYear();
	return `${first || day} ${monthNamesShort[month]} ${year}`;
  }
  
function getTwoMonthsBefore() {
	const today = new Date();
	const twoMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 2, today.getDate());
	return formatDate(twoMonthsAgo, 1);
}
  
function addDay(day) {
	const newDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
	return newDate;
}

function MainView() {
	//data
	const [data, setData] = useState<any>([]);
	//dates
	const [initialDate, setInitialDate] = useState<string>(getTwoMonthsBefore());

	const [inputInitialDate, setInputInitialDate] = useState<string>("");
	//
	const [endDate, setEndDate] = useState<string>(formatDate(new Date()));

	const [inputEndDate, setInputEndDate] = useState<string>("");
	//refetch
	const [refresh, setRefresh] = useState<boolean>(false);

	//
	const [origins, setOrigins] = useState<string>(defaultSites.join(', '));

	const {
		isLoading,
		data: leads,
		isError,
		error,
	} = useQuery({
		queryKey: [`data-boxPlot`, [refresh]],
		queryFn: () => DataAPI.getBoxPlot(initialDate, endDate,  origins.replace(/[^\d,]+/g, '').split(',')),
		onSuccess: (data: any) => {
			console.log(data);
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
				<h1 className="text-center">Water Report</h1>

				<div className="filters mt-2">
					<div className="date-picker mr-2">
						<label htmlFor="">Sites:</label>
					</div>
					<StyledTextArea
						value={origins}
						onChange={(e: any) => {
							setOrigins(e.target.value);
						}}
					/>
				</div>
				<div className="filters mb-5">
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
									let date: Date = addDay(new Date(e.target.value));
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
									let date: Date = addDay(new Date(e.target.value));
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
							x: element.month,
							y: element.discharges,
						});
					});
					return (
						<div key={index}>
							<h2>{chartData.siteName}</h2>
							<ChartBoxPlot data={newData} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MainView;
