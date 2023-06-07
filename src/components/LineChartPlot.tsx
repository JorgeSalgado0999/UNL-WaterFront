import ReactApexChart from "react-apexcharts";

interface Props {
	data: any;
}

export const LineChartPlot = (props: Props) => {
	const options: any = {
		chart: {
			type: "line",
			width: 350,
			height: 400,
			zoom: {
				enabled: true,
			},
		},
		dataLabels: {
			enabled: true,
		},
		title: {
			text: "Product Trends by Month",
			align: "left",
		},
		grid: {
			row: {
				colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		stroke: {
			curve: "smooth",
		},
		markers: {
			size: 10,
		},
		xaxis: {
			categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		},
	};

	const series: any = [
		{
			name: "one",
			data: [10, 20, 45, 51, 49, 62, 69, 91, 148],
		},
		{
			name: "two",
			data: [10, 41, 35, 31, 49, 12, 69, 45, 123],
		},
		{
			name: "three",
			data: [10, 31, 55, 18, 90, 27, 29, 27, 7],
		},
	];

	return (
		<ReactApexChart
			options={options}
			series={props.data}
			type="line"
			height={350}
		/>
	);
};
