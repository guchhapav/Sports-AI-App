from typing import List, Dict, Any, Optional
import feedparser #type: ignore

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
