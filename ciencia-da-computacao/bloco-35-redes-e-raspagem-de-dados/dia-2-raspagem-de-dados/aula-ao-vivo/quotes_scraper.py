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
  quotes = selector.css('body > div > div.row.header-box > div.col-md-8 > h1 > a ::text').get()
  return quotes

def scrape_all_quotes(): # exibe os dados da página
  base_url = 'https://quotes.toscrape.com/'  
  quotes_html = fetch_html(base_url) # pega o html da página
  quotes_data = parse_quotes_html(quotes_html) # pega os dados da página
  print(quotes_data)
  return quotes_data

scrape_all_quotes()


