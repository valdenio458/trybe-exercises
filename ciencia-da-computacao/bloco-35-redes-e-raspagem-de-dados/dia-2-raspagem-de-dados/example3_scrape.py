import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"

# testando com a primeira página:
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor:
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar o href à nossa URL_BASE
print(URL_BASE + href)