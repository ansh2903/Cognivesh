import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./stockdetails.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockDetails = () => {
  const { symbol } = useParams(); // Get symbol from URL params
  const [stockData, setStockData] = useState([]); // Stock overview data
  const [forecastedData, setForecastedData] = useState([]); // Forecasted stock data
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stock overview and forecasted data
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/stock-overview"
        );
        setStockData(response.data);
      } catch (err) {
        setError("Failed to fetch stock overview data");
      } finally {
        setLoading(false);
      }
    };

    const fetchForecastedData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/stock-forecasted"
        );
        setForecastedData(
          response.data.filter((item) => item._id.startsWith(symbol)) // Filter forecasted data for the selected symbol
        );
      } catch (err) {
        console.error("Failed to fetch forecasted stock data");
      }
    };

    fetchStockData();
    fetchForecastedData();
  }, [symbol]);

  // Find the specific stock based on the symbol
  const stock = stockData.find((item) => item.Symbol === symbol);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!stock) return <p>Stock not found</p>;

  // Prepare data for the forecast graph
  const graphData = {
    labels: forecastedData.map((point) => point.date), // Extract dates from forecasted data
    datasets: [
      {
        label: `Forecasted Price for ${stock.Name}`,
        data: forecastedData.map((point) => point.value), // Extract values from forecasted data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // Smooth curve
        fill: true,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Forecasted Price Trends for ${stock.Name}`,
      },
    },
  };

  return (
    <div className="stock-details">
      <h1>
        {stock.Name || "Stock Name Unavailable"} ({symbol})
      </h1>

      {/* Main Content */}
      <div className="main-content">
        {/* Graph Area */}
        <div className="graph-area">
          <h3>Forecasted Price Trends</h3>
          <Line data={graphData} options={graphOptions} />
        </div>
        <div className="overview-area">
          {/* Key Metrics Section */}
          <div className="key-metrics">
            <h3>Key Metrics:</h3>
            <div className="metrics-grid">
              <div>Revenue (TTM): {stock["RevenueTTM"] || "N/A"}</div>
              <div>PE Ratio: {stock["PERatio"] || "N/A"}</div>
              <div>PEG Ratio: {stock["PEGRatio"] || "N/A"}</div>
              <div>Profit Margin: {stock["ProfitMargin"] || "N/A"}</div>
              <div>52-Week Low: {stock["52WeekLow"] || "N/A"}</div>
              <div>52-Week High: {stock["52WeekHigh"] || "N/A"}</div>
              <div>Market Cap: {stock["MarketCapitalization"] || "N/A"}</div>
              <div>
                Operating Margin: {stock["OperatingMarginTTM"] || "N/A"}
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="company-info">
            <h3>About the Company:</h3>
            <p>
              <strong>Exchange:</strong> {stock["Exchange"] || "N/A"}
            </p>
            <p>
              <strong>Industry:</strong> {stock["Industry"] || "N/A"}
            </p>
            <p>
              <strong>Currency:</strong> {stock["Currency"] || "N/A"}
            </p>
            <p>
              <strong>Asset Type:</strong> {stock["AssetType"] || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {stock["Address"] || "N/A"}
            </p>
            <p>
              <strong>Description:</strong> {stock["Description"] || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
