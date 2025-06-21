from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo import ASCENDING

# MongoDB setup
mongoUri = "mongodb+srv://@stockmarketdata.idn7b.mongodb.net/?retryWrites=true&w=majority&appName=StockMarketData"
client = MongoClient(mongoUri, server_api=ServerApi('1'))
try:
    client.admin.command('ping')
    print("Pinged your deployment successfully.")
except Exception as e:
    print(e)

db = client['StockMarketData']

