import React from "react";
import ReactApexChart from "react-apexcharts";

export const ChartExample = () => {
	const options: any = {
		chart: {
			type: "boxPlot",
			height: 350,
		},
		title: {
			text: "Basic BoxPlot Chart",
			align: "left",
		},
		plotOptions: {
			boxPlot: {
				colors: {
					upper: "#5C4742",
					lower: "#A5978B",
				},
			},
		},
	};
	const series: any = [
		{
			type: "boxPlot",
			data: [
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
			],
		},
	];

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="boxPlot"
			height={350}
		/>
	);
};
