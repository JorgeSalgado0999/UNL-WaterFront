import React from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
	data: any;
}

export const ChartBoxPlot = (props: Props) => {
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
	const data: any = [
		{
			type: "boxPlot",
			data: props.data,
		},
	];

	return (
		<ReactApexChart
			options={options}
			series={data}
			type="boxPlot"
			height={350}
		/>
	);
};
