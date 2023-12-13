import  {BarChart}  from "@mui/x-charts";


const BarCharts = () => {
  return (
    < >
    <BarChart
  xAxis={[{ scaleType: 'band', data: ['Team A', 'Team B', 'Team C'] }]}
  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  // width={500}
  height={300}
/>
    </>
  );
};

export default BarCharts;
