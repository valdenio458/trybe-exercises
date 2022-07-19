import time
import requests
from parsel import Selector

def fetch_html(url):
  time.sleep(1)
  try:
      res = requests.get(url, timeout=3)
      res.raise_for_status()
  except (requests.HTTPError, TimeoutError):
        return "" 

  return res.text

def parse_quotes_html(html_content): # pega os dados da página
  selector = Selector(html_content)
  result = []
  for quote in selector.css('div.col-md-8 div.quote'):    
      content = quote.css("span.text ::text").get()
      author = quote.css("span small.author ::text").get()
      tags = quote.css("div.tags a.tag ::text").getall()
      quote_data = {"content": content, "author": author, "tags": tags}
      result.append(quote_data)
  return result
    
  

def scrape_all_quotes(): # exibe os dados da página
  base_url = 'https://quotes.toscrape.com/'  
  quotes_html = fetch_html(base_url) # pega o html da página
  quotes_data = parse_quotes_html(quotes_html) # pega os dados da página
  return quotes_data




