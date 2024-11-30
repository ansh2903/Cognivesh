import React, { useEffect, useState } from "react";
import "./contentpage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const ContentPage = () => {
  const [timeSeriesData, setTimeSeriesData] = useState([]); // Store all time series data
  const [date, setDate] = useState("2024-11-14"); // Default date
  const [error, setError] = useState("");

  // Fetch the entire time series data on component mount
  useEffect(() => {
    const fetchTimeSeriesData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/stock-timeseries"
        );
        console.log("Fetched Time Series Data:", response.data);
        setTimeSeriesData(response.data); // Save the whole dataset
      } catch (err) {
        setError("Failed to fetch time series data");
      }
    };

    fetchTimeSeriesData();
  }, []); // Only run on initial render

  // Function to find the "open" price for a specific stock symbol and date
  const getOpenPriceForSymbol = (symbol) => {
    const stockData = timeSeriesData.find(
      (item) => item.date === date && item.symbol === symbol
    );
    console.log(`Data for ${symbol}:`, stockData);
    return stockData ? stockData.close : "Data not available";
  };
  const symbol = ["AAPL", "MSFT", "AMD", "CSCO"];

  return (
    <>
      <div className="page">
        <div className="content">
          <Link
            to={`/stock/${symbol[0]}`}
            className="card-link"
            key={symbol[0]}
          >
            <div className="cards">
              <div className="cardImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s"
                  alt=""
                />
                <div className="stockName">
                  <h4>Apple</h4>
                  <h4 className="company">Tech</h4>
                </div>
              </div>
              <div className="stockInfo">
                <h5>price : ${getOpenPriceForSymbol("AAPL")} </h5>
                {/* <h5>predicted : $300</h5> */}
              </div>
            </div>
          </Link>
          <Link
            to={`/stock/${symbol[1]}`}
            className="card-link"
            key={symbol[1]}
          >
            <div className="cards">
              <div className="cardImg">
                <img
                  src="https://banner2.cleanpng.com/20180131/bxq/av2o7yteo.webp"
                  alt=""
                />
                <div className="stockName">
                  <h4>Microsoft</h4>
                  <h4 className="company">Tech</h4>
                </div>
              </div>
              <div className="stockInfo">
                <h5>price : ${getOpenPriceForSymbol("MSFT")}</h5>
                {/* <h5>predicted : $200</h5> */}
              </div>
            </div>
          </Link>
          <div className="cards">
            <div className="cardImg">
              <img
                src="https://www.pngmart.com/files/22/Tesla-Logo-PNG-Transparent.png"
                alt=""
              />
              <div className="stockName">
                <h4>Tesla</h4>
                <h4 className="company">Tech</h4>
              </div>
            </div>
            <div className="stockInfo">
              <h5>price : $320.72</h5>
              {/* <h5>predicted : $350</h5> */}
            </div>
          </div>
          <Link
            to={`/stock/${symbol[2]}`}
            className="card-link"
            key={symbol[2]}
          >
            <div className="cards">
              <div className="cardImg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAZlBMVEUAAAD////6+vrp6elFRUbf399yc3Tt7e1dXl8xMjN7fHwuLi6kpKShoaG6u7yPj4+tra2EhYUHCAi1tbb09PQlJibBwcIcHR1AQEHY2NlKSkvOzs5WVlfIyMkREhNkZWU5OTmYmJnBYSoFAAAFCElEQVR4nO2ca5uyIBCGUdO2tYOZmmWm/f8/+aYyCIhKHoLrXZ5Pux7gdmSG0yRCRkZGRkZGyyjd8Uo3k3Vdmu61dTk50+UtTRcG1mKyF6dD4UVnOoQWs94qdM+l8FahQ2ihl7sSXXjQmW6htrcaHdprTbeE9VakW8B6a9LNt96qdLMDy7p0c1/uynToqDXdvLa3Ot2strc+HZrRqX2BbgbeN+ime+5X6NBLa7rQ+x2RJ3z936GT0ENruh+FdM/RKxTS3cdrUUf3cE760qWuddaWLr1Z+tJtXEtfurSC05WutpyudI3lLOulI13lELUOGtLh16onXXyz9KW7u5a+dD4Fpx3d/WbpSxc7lr50ZWbpS+c7lr50cc5XoxFdyltOJzo/61ajDV3qCqrRhW53E1WjC91LVIvmdHut6S6GztAZuv+JLvzW6qKYzj3sBxQUPbkEX6Ib1jGu7hSsHOtAl+Nbu9bTgK6xnBBPPV1C3cxvuyiny2PqZj6HSjXdkbuddQ3FdIzlKrEpXmrpeMvxBSily4WbLJT1VNIdxTtAVK+hkC4P+8ogqQ7q6BLeIVpdAU8ZXdJruUoXtXSdUMLqmqikO44lEj8v6uhyiSznXBXdgEO0io9q6PpDCatcBV0mY7lKcWJ9nU7WcpXy34XpTtthyTgE0bVcmO7qD2s8u8LIyMjIyMjI6E/Jv+PfbpZ9p0Tj4mt95t7cE7M/Ai13siPpUYVJ1Awxo6yD96pPRYJ5bNzcFTW7BqeIHa06bh54uyXoqD2HTsIdLBt21wBgWaJZLjuJRvtR4s3/JS21cOn2nuNT8QjOAN177pjdZ8KVdC4FX1hLzmb3tjSDdG8d5g36z3RZCXeypWMmqYUtTSex2TagJ5MjE/300VnRgxy9b9vDLJ3tYAejygxmWO/HtmgFvXSWs8EHmbwalg7fHj7OeVvueMp3r7i9hsjvpbMyfJDJqxHSvXUtyDNsJ3uuj1+S+8JFsc7JbkTUYQ8v0o3RvUUunNz0wCeCDW4qLtNKuB3EQ/fQAN0O8oPcdBrcE95SSsIrE5H5/c0D6+LDdOgObW9iy3tgi91C0mUwSyY8XbTfckeG6BDEgxxNEuyBvA32hFQoOqhgOvtIh4j6SGJL0JEwOAkuxJXWweKFS6IjMtB5fLh9eTJ0BTzUJLpfGuiOQ4C9aS8AujMXeQJ0lqEjkXGSW7Av89KtoqVjfrX6jnxSdMRrH+hzgeG3zb8lLsppn5Sii9v8Qbf8Bl3AlQmmbAMARYdKqKqml6KDxmJt0MeCfoJ0/RDLHCEdhJ+oQLJ0ZCwzYSAAMJkf18uvMcnAJ6Mlhg792u3fUnRzIgq8SJtMB+BRyQYxS1fXhjtiGboQasjQx/rhI2wruxDTocCGbXcZOg/KG08g5TX4MRlg4OkQmZxJ0JFot/3cZctubnarKO2hIxqnazPTxZkEg+IHG6z2c+lijzy9PWFiBv6ZBZdWAYyonN1EuvitclOcqPTq8cTgjmDs9Q52YSu0A1c5TaKLmk9JbenJyke7WFjgE7yzQ3d6o7PrpOkE6skQGRTplvhhawGlesvQBVOmPFBcZ75ExvK3BegE60ZSAtN1c5pIRVWQgtQ6AR1TgHiV51JMmyvu4KNo3W3oOMNfSauiw8vpu8yjrnr3wA77ibVbfjlNnIihaoMXf0dOsGXt41M+dV3XBld8Vcz8B1r8G3NGRkZGRn9V/wAWKFfKAmvjcgAAAABJRU5ErkJggg=="
                  alt=""
                />
                <div className="stockName">
                  <h4>AMD</h4>
                  <h4 className="company">Tech</h4>
                </div>
              </div>
              <div className="stockInfo">
                <h5>price : ${getOpenPriceForSymbol("AMD")}</h5>
                {/* <h5>predicted : $250</h5> */}
              </div>
            </div>
          </Link>
          <Link
            to={`/stock/${symbol[3]}`}
            className="card-link"
            key={symbol[3]}
          >
            <div className="cards">
              <div className="cardImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiBgroJEivPt6a0b9xBkAnImkmqj9lmSkqQ&s"
                  alt=""
                />
                <div className="stockName">
                  <h4>CISCO</h4>
                  <h4 className="company">Tech</h4>
                </div>
              </div>
              <div className="stockInfo">
                <h5>price : ${getOpenPriceForSymbol("CSCO")}</h5>
                {/* <h5>predicted : $45</h5> */}
              </div>
            </div>
          </Link>
        </div>

        <div className="news">
          <div className="newsCard">
            <p>
              Zomato share price jumps over 4% following F&O inclusion, rival
              Swiggy's listing
            </p>
          </div>
          <div className="newsCard" style={{ height: "30vh" }}>
            <p>
              Varun Beverages stock climbs 5% as firm launches Rs 7,500 crore
              QIP
            </p>
          </div>
          <div className="newsCard" style={{ height: "38vh" }}>
            <p>
              Allied Blenders surges 2% after Antique initiates "buy" coverage,
              sees 28% upside potential
            </p>
          </div>
          <div className="newsCard" style={{ height: "28vh", width: "28vw" }}>
            <p>
              Wall Street week ahead: Nvidia, Walmart earnings to guide US stock
              markets
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
