from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.models.user import User #type: ignore
import os

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME", "sportsnews")

client: AsyncIOMotorClient = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]

async def init_db():
    await init_beanie(database=db, document_models=[User])
