from fastapi import FastAPI, Request #type: ignore
from fastapi.middleware.cors import CORSMiddleware #type: ignore
from app import article_grabber #type: ignore
from typing import List

app = FastAPI()

# Allow frontend (on localhost:3000) to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev use only
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/headlines")
async def get_headlines(request: Request):
    sports: List[str] = await request.json()
    print(sports)
    all_titles = []
    for sport in sports['sports']:
        all_titles.extend(article_grabber.getResponse(sport))
    
    return {"headlines": all_titles}

@app.get("/greet")
def greet():
    return {"message": article_grabber.getResponse()}