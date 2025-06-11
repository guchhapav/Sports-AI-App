import feedparser #type: ignore
from typing import List, Any, Optional
from feedparser import FeedParserDict #type: ignore


def getResponse(sport: Optional[str] = None) -> List[str]:
    if sport:
        url = "https://www.espn.com/espn/rss/"+ sport +"/news"
    else:
        url = "https://www.espn.com/espn/rss/news"   
    print(url)
    feed = feedparser.parse(url)
    
    raw_entries: List[Any] = feed.entries
    titles: List[str] = []

    for entry in raw_entries:
        if isinstance(entry, FeedParserDict):
            title = entry.get("title")
            if isinstance(title, str):
                titles.append(title)    
    print(titles)
    return titles
