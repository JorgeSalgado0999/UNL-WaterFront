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
			enabled: false,
		},
		title: {
			text: "title",
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
			size: 0,
		},
		xaxis: {
			labels:{
				show:false,
			}
		// 	categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		},
	};

	return (
		<ReactApexChart
			options={options}
			series={props.data}
			type="line"
			height={350}
		/>
	);
};
