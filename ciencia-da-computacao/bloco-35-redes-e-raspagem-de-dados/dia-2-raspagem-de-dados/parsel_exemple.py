import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")
# print(response.status_code)
selector = Selector(text=response.text)
# print(response.text)
# print(selector.css("img.thumbnail").getall()[0])
for thumbnail in selector.css("img.thumbnail").getall():
    print(thumbnail)
   