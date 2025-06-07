from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (on localhost:3000) to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev use only
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/greet")
def greet():
    return {"message": "Hello from the FastAPI backend!"}