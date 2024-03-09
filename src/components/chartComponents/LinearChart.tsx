import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";

const LineChart = ({ chartOptions }) => {
  useEffect(() => {
    console.log(chartOptions[2]?.values);
  }, [chartOptions]);

  const xAxisData = chartOptions[0]?.values || []; // dimension // X-axis
  const yAxisData =
    chartOptions.length == 2
      ? chartOptions[1]?.values
      : chartOptions.slice(1).map((option) => option.values) || []; // measure

  const options = {
    tooltip: {
      trigger: 'axis',
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
      type: "category",
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
      style={{ height: "600px", width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default LineChart;
