from fastapi import FastAPI

from quotes_scraper import scrape_all_quotes

app = FastAPI()

all_quotes = scrape_all_quotes()

# all_quotes = [
#     {
#       "author": "Albert Einstein",
#       "contenet": "A melhor maneira de prever o futuro é inventá-lo.",
#       "tags": ["science", "future"],
#       },
#       {
#       "author": "Douglas Adams",
#       "content": "A vida é uma coisa muito mais do que o problema.",
#       "tags": ["life", "future"],
#       },
#   ]

@app.get("/")
def get_quotes():
    return all_quotes