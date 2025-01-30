import urllib.parse
import pandas as pd
import requests
import numpy as np
import json
from datetime import datetime
import time
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo import ASCENDING
import random

# API endpoints and symbols
base_url = "https://www.alphavantage.co/query?" #required for every api call

timeSeries = 'TIME_SERIES_DAILY'

# List of API keys for rotating to avoid rate limits
api_keys = [
    "KY1QQES2VAJB74DG",
    "VWZMSUQ0M9254YC0",
    "WQLYU474OYKT37V7",
    "36H0QDI3A9ZAQUVZ",
    "8D0BSSB96RQ8C81M",
    "55729QVGNTDVI181"
]

# function to rotate API keys when rate limit is reached
current_key_index = 0

def fetch_with_key_switching(api_url): #api_url here is a parameter that must be given whenever this function is used, this api_uri is the base api url for a specific function with changable parameters
    global current_key_index
    while current_key_index < len(api_keys): #api_keys is the list of api keys given before this function, akso running a loop
        api_key = api_keys[current_key_index] #assigning the api of the current index to the variable name api_key
        api_url_with_key = api_url.format(api_key=api_key) #getting the api_url for a specific function, taking the variable api_key and assigning the api key value to it.
        response = requests.get(api_url_with_key)
        
        if response.status_code == 200:
            data = response.json() #whatever the api returns, is converted into a json format and then is assigned to the variable data
            if "Information" in data and "Our standard API rate limit is 25 requests" in data["Information"]:
                print(f"Key {api_key} ran out of requests, switching to the next key.")
                current_key_index += 1
                time.sleep(1)  # Small delay to avoid rapid switching
            else:
                return data
        else:
            print(f"Error fetching data with key {api_key}")
            current_key_index += 1
        
        if current_key_index >= len(api_keys):
            raise Exception("All API keys have run out of requests for the day.")
    
    return None

# Global Market Status Example
url_Globle_Market = f'{base_url}function=MARKET_STATUS&apikey={{api_key}}'
market_status_data = fetch_with_key_switching(url_Globle_Market)
print(json.dumps(market_status_data, indent = 4))