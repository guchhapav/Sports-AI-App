import feedparser #type: ignore
from typing import List, Dict, Any, Optional
from feedparser import parse #type: ignore
from openai import OpenAI #type: ignore
import os
from dotenv import load_dotenv


def getArticles(sports: Optional[List[str]] = None) -> List[Dict[str, str]]:
    urls = (
        [f"https://www.espn.com/espn/rss/{sport}/news" for sport in sports]
        if sports else
        ["https://www.espn.com/espn/rss/news"]
    )

    raw_entries: List[Any] = [entry for url in urls for entry in feedparser.parse(url).entries]

    return [
        {
            "title": entry.get("title", ""),
            "description": entry.get("description", ""),
            "link": entry.get("link", "")
        }
        for entry in raw_entries
        if "title" in entry and "description" in entry
    ]


def getAIresponse(entries: List[Dict[str, str]]):
    # Get the Open AI API key here
    load_dotenv()
    openai_key = os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=openai_key)

    # Get articles
    entries_text = "\n\n".join([
    f"- Headline: {entry['title']}\n  Summary: {entry['description']}"
    for entry in entries
    ])


    response = client.responses.create(
    model="gpt-4.1-nano",
    input=[
        {
        "role": "system",
        "content": [
            {
            "type": "input_text",
            "text": "You are an expert sports analyst helping users stay informed. Summarize these headlines and their descriptions in concise bullet points. No more than 5."
            }
        ]
        },
        {
        "role": "user",
        "content": [
            {
            "type": "input_text",
            "text": entries_text
            }
        ]
        }
    ],
    text={
        "format": {
        "type": "text"
        }
    },
    reasoning={},
    tools=[],
    temperature=0.5,
    max_output_tokens=2048,
    top_p=1,
    store=True
    )
    return response.output_text