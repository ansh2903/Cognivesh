# api/main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AnalysisRequest(BaseModel):
    data: list

@app.post("/analyze")
async def analyze_data(request: AnalysisRequest):
    # Your Python logic here
    result = {"status": "success", "result": sum(request.data)}
    return result
