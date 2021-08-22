import { useState, useEffect } from "react";
import { getHistoricalData } from "../connect";
import "./stylesheets/dataTable.css";
import { Bar, Line } from "react-chartjs-2";

const DataTable = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const key = "8C2R26DMRMVREBOX";

  useEffect(() => {
    getHistoricalData();
    async function getHistoricalData() {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${key}`
      );
      const data = await response.json();
      console.log("historical Data is:");
      console.log(data["Time Series (Digital Currency Daily)"]);
    }
  }, []);

  const Chart = () => {
    setChartData({
      labels: [
        "20/03",
        "21/03",
        "22/03",
        "23/03",
        "24/03",
        "25/03",
        "26/03",
        "27/03",
        "28/03",
        "29/03",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            1,
            2,
            3,
            14,
            9,
            4,
            5,
            6,
            7,
            20,
            12,
            13,
            15,
            2,
            5,
            16,
            19,
            8,
            9,
            10,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    Chart();
  }, []);
  return (
    <div id="DataTableContainer">
      <h1 id="NameDisplay"> Bitcoin </h1>
      <div id="graphContainer">
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: "Thiccness Scale",
            display: true,
          }}
        />
      </div>
    </div>
  );
};

export { DataTable };
