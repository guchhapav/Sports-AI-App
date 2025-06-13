from typing import List, Dict
from openai import OpenAI #type: ignore
import os
from dotenv import load_dotenv


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
            "text": "You are an expert sports analyst helping users stay informed. Summarize these headlines and their descriptions in concise bullet points. No more than 5. Format each bullet point starting with the bullet character • (Unicode U+2022). Each bullet should be on its own line."
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
    temperature=0.7,
    max_output_tokens=2048,
    top_p=1,
    store=True
    )
    return response.output_text