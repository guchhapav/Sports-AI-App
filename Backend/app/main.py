from fastapi import FastAPI, Request #type: ignore
from fastapi.middleware.cors import CORSMiddleware #type: ignore
from app.functions.getAIresponse import getAIresponse #type: ignore
from app.functions.getArticles import getArticles #type: ignore
from typing import Dict, List

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev use only
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/summary")
async def get_summary(request: Request):
    sports: Dict[str, List[str]] = await request.json()
    return {"summary": getAIresponse(getArticles(sports['sports']))}

@app.get("/greet")
def greet():
    return {"message": 'Hello from the backend!'}