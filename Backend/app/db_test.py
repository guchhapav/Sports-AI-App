import asyncio
from app.db import init_db #type: ignore
from app.models.user import User #type: ignore

async def main():
    await init_db()

    # Create a new user
    user = User(
        email="test@example.com",
        sports_followed=["NBA"],
        sports_learning=["Cricket"],
        chat_history=[
            {"question": "What is a wicket?", "timestamp": "2025-06-14T12:00:00Z"}
        ]
    )

    await user.insert()
    print(f"Inserted user with ID: {user.id}")

    # Fetch the user
    found_user = await User.find_one(User.email == "test@example.com")
    if found_user:
        print(found_user.model_dump())

if __name__ == "__main__":
    asyncio.run(main())
