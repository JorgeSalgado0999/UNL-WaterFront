import ReactApexChart from "react-apexcharts";

interface Props {
	data: any;
}

export const LineChartPlot = (props: Props) => {
	let dischargesArray = props.data[0].y;
	let percentagesArray: any = [];
	let start = 100;
	let count = start / (dischargesArray.length - 1);
	let i = 0;

	dischargesArray.sort((a: any, b: any) => {
		if (Number(a) < Number(b)) {
			return 1;
		}

		if (Number(a) > Number(b)) {
			return -1;
		}

		return 0;
	});

	dischargesArray.forEach((discharge: any) => {
		percentagesArray.push(Math.round(100 - count * i));
		i++;
	});

	const options: any = {
		chart: {
			type: "line",
			width: 350,
		},
		xaxis: {
			categories: percentagesArray,
		},
		markers: {
			size: 10,
		},
		stroke: {
			curve: "smooth",
		},
	};
	const data: any = [
		{
			type: "line",
			data: dischargesArray,
		},
	];

	return (
		<ReactApexChart options={options} series={data} type="line" height={350} />
	);
};
