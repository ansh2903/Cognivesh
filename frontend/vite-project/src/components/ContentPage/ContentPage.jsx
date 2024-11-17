import React, { useEffect, useState } from "react";
import "./contentpage.css";
import axios from "axios";

export const ContentPage = () => {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch specific timeseries data by _id
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/stock-timeseries/AMD_2024-11-14"
        );
        setStockData(response.data);
      } catch (error) {
        setError("Failed to fetch stock data");
        console.error(error);
      }
    };

    fetchStockData();
  }, []);
  return (
    <>
      <div className="page">
        <div className="content">
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
              <h5>price : {stockData.open} </h5>
              {/* <h5>predicted : $300</h5> */}
            </div>
          </div>
          <div className="cards">
            <div className="cardImg">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
                alt=""
              />
              <div className="stockName">
                <h4>Spotify</h4>
                <h4 className="company">Music</h4>
              </div>
            </div>
            <div className="stockInfo">
              <h5>price : $300</h5>
              {/* <h5>predicted : $200</h5> */}
            </div>
          </div>
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
              <h5>price : $300</h5>
              {/* <h5>predicted : $350</h5> */}
            </div>
          </div>
          <div className="cards">
            <div className="cardImg">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              />
              <div className="stockName">
                <h4>Google</h4>
                <h4 className="company">Tech</h4>
              </div>
            </div>
            <div className="stockInfo">
              <h5>price : $300</h5>
              {/* <h5>predicted : $250</h5> */}
            </div>
          </div>
          <div className="cards">
            <div className="cardImg">
              <img
                src="https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png?w=300"
                alt=""
              />
              <div className="stockName">
                <h4>Netflix</h4>
                <h4 className="company">Entertainment</h4>
              </div>
            </div>
            <div className="stockInfo">
              <h5>price : $300</h5>
              {/* <h5>predicted : $45</h5> */}
            </div>
          </div>
        </div>

        <div className="news">
          <div className="newsCard"></div>
        </div>
      </div>
    </>
  );
};
