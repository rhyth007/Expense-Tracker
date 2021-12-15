import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value);
 const totMax = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					value={dataPoint.value}
					maxValue={totMax}
					label={dataPoint.label}
					key={dataPoint.label}
				/>
			))}
		</div>
	);
};
export default Chart;
