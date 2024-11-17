import express from "express";
// import { MongoClient } from "mongodb";
import mongoose, { mongo } from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://parth:efUSKD9XSevV8x@stockmarketdata.idn7b.mongodb.net/StockMarketData?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

mongoose.connection.once("open", async () => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log(
    "Collections:",
    collections.map((c) => c.name)
  );
});

// Define schemas for each collection
const StockOverviewSchema = new mongoose.Schema(
  {
    symbol: String,
    name: String,
    sector: String,
  },
  { collection: "Stock_Overview" }
);

const StockTimeseriesSchema = new mongoose.Schema(
  {
    _id: String,
    symbol: String,
    date: String,
    open: Number,
    close: Number,
    high: Number,
    low: Number,
    volume: Number,
  },
  { collection: "Stock_Timeseries_Data" }
);

// Create models for the collections
const StockOverview = mongoose.model("Stock_Overview", StockOverviewSchema);
const StockTimeseriesData = mongoose.model(
  "Stock_Timeseries_Data",
  StockTimeseriesSchema
);

app.get("/stock-overview", async (req, res) => {
  try {
    const data = await StockOverview.find();
    console.log("Stock Overview Data:", data); // Debug log
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stock overview data" });
  }
});

app.get("/stock-timeseries", async (req, res) => {
  try {
    const data = await StockTimeseriesData.find();
    console.log("Stock Timeseries Data:", data); // Debug log
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stock timeseries data" });
  }
});

// app.get("/stock-timeseries/:id", async (req, res) => {
//   try {
//     const id = req.params.id; // Get _id from request parameters
//     const data = await StockTimeseriesData.findById(id); // Find document by _id
//     if (!data) {
//       return res.status(404).json({ error: "Data not found" });
//     }
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch timeseries data" });
//   }
// });

app.get("/", (req, res) => {
  res.send("backend server");
});

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
