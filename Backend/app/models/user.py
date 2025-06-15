from beanie import Document
from pydantic import EmailStr
from typing import List

class User(Document):
    email: EmailStr
    sports_followed: List[str]
    sports_learning: List[str] = []
    chat_history: List[dict] = []

    class Settings:
        name = "users"
