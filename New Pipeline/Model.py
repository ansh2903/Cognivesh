import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import math
from numpy import array
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import LSTM
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error
from datetime import timedelta
import datetime
import json
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo import ASCENDING
import pymongo

import json
import pandas as pd



# MongoDB setup
mongoUri = "mongodb+srv://anshsharma2903:9968264920@stockmarketdata.idn7b.mongodb.net/?retryWrites=true&w=majority&appName=StockMarketData"
client = MongoClient(mongoUri, server_api=ServerApi('1'))
try:
    client.admin.command('ping')
    print("Pinged your deployment successfully.")
except Exception as e:
    print(e)

db = client['StockMarketData']
collection = db["Stock_Timeseries_Data"]



# Load the symbol from the selected_symbol.json file
with open('selected_symbol.json', 'r') as file:
    symbol_data = json.load(file)
    # Get the symbol from the JSON (it's under the 'selected_symbol' key)
    symbol = symbol_data.get('selected_symbol')

# Ensure you have the symbol loaded correctly
print("You searched for:", symbol)

# Define the query to match the symbol in the MongoDB collection
ticker_data = {"symbol": symbol}

# Fetch all documents where the symbol matches
data_list = list(collection.find(ticker_data))

# Create a DataFrame
df = pd.DataFrame(data_list)

# Clean up the DataFrame
df = df.drop(columns=['_id', 'symbol'])  # Drop unnecessary columns
df['date'] = pd.to_datetime(df['date'])  # Convert 'date' to datetime format

# Display the DataFrame
df
