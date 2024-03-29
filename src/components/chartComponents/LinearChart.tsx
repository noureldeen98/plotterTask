import ReactECharts from "echarts-for-react";
import { ChartDataResponse } from "../utils/models/chartDataResponse";

const LineChart = ({ chartOptions }) => {

  const xAxisData = chartOptions[0]?.values || []; // dimension // X-axis
  const yAxisData =
    chartOptions.length == 2
      ? chartOptions[1]?.values
      : chartOptions
          .slice(1)
          .map((option: ChartDataResponse) => option.values) || []; // measure

  const options = {
    title: {
      text: 'Line Chart Example',
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "10%", // Adjust as needed
      right: "10%", // Adjust as needed
      bottom: "10%", // Adjust as needed
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLabel: {
        rotate: 45, // Rotate labels by 45 degrees
      },
    },
    yAxis: {
      type: "value",
      data: yAxisData,
    },
    series: [
      {
        data:
          chartOptions.length == 2
            ? chartOptions[1]?.values
            : chartOptions.slice(1).map((value, index) => ({
                value: value || null, // Handle missing data
                name: xAxisData[index],
              })) || [], // Assuming chartOptions[2] contains the actual line chart data
        type: "line",
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: "600px", width: "100%",marginLeft:"60px",marginTop:"30px"}}
      opts={{ renderer: "svg" }}
    />
  );
};

export default LineChart;
